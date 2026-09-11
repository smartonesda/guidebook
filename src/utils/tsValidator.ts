import type { TestCase } from '../data/challenges';

export type ValidationStatus = 'correct' | 'incorrect' | 'syntax-error' | 'type-error' | 'runtime-error' | 'validator-error';

export interface ValidationResult {
  status: ValidationStatus;
  passed: boolean;
  error?: string;
  testResults: {
    description: string;
    passed: boolean;
    error?: string;
  }[];
}

const VALIDATION_TIMEOUT_MS = 8000;
const DEBUG = false; // Set to true for development debugging

function debugLog(...args: any[]) {
  if (DEBUG) console.log('[tsValidator]', ...args);
}

/**
 * Validates student TypeScript code against test cases.
 *
 * Pipeline:
 *   1. Check TS compiler availability
 *   2. Transpile TS → JS (catches syntax errors)
 *   3. Execute JS + tests in a sandboxed iframe
 *   4. Collect results via postMessage
 *
 * KEY DESIGN: Student code and test assertions run inside a SINGLE
 * <script> block in the iframe at the TOP LEVEL (no wrapping try/catch
 * around student code that would create a block scope). This ensures
 * that top-level `let`/`const` declarations from the student code are
 * visible to the test runner code that follows.
 *
 * Error handling for student runtime errors is done via window.onerror
 * on the iframe instead.
 */
export async function validateCode(code: string, tests: TestCase[] | undefined): Promise<ValidationResult> {
  const ts = (window as any).ts;
  if (!ts) {
    debugLog('TypeScript compiler not found on window.ts');
    return {
      status: 'validator-error',
      passed: false,
      error: "TypeScript compiler belum tersedia. Tunggu beberapa saat lalu coba lagi.",
      testResults: []
    };
  }

  debugLog('Compiler found, transpiling code...');

  // Step 1: Transpile TypeScript to JavaScript
  let jsCode = "";
  try {
    const result = ts.transpileModule(code, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.None,
        strict: false,
      },
      reportDiagnostics: true,
    });

    // Check for diagnostics
    if (result.diagnostics && result.diagnostics.length > 0) {
      const errors = result.diagnostics
        .filter((d: any) => d.category === ts.DiagnosticCategory.Error)
        .map((d: any) => ts.flattenDiagnosticMessageText(d.messageText, '\n'));

      if (errors.length > 0) {
        debugLog('Syntax errors found:', errors);
        return {
          status: 'syntax-error',
          passed: false,
          error: errors.join('\n'),
          testResults: []
        };
      }
    }

    jsCode = result.outputText;
    debugLog('Transpilation successful. JS output:', jsCode);
  } catch (err: any) {
    debugLog('Transpilation threw:', err);
    return {
      status: 'syntax-error',
      passed: false,
      error: `Compilation Error: ${err.message}`,
      testResults: []
    };
  }

  // Step 2: If no tests, consider it passed
  if (!tests || tests.length === 0) {
    debugLog('No tests to run, marking as passed.');
    return { status: 'correct', passed: true, testResults: [] };
  }

  // Step 3: Execute in sandboxed iframe
  debugLog('Creating iframe sandbox...');
  return executeInSandbox(jsCode, tests);
}

function executeInSandbox(jsCode: string, tests: TestCase[]): Promise<ValidationResult> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    let resolved = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function cleanup() {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('message', listener);
      if (iframe.parentNode) {
        document.body.removeChild(iframe);
      }
    }

    function finishWith(result: ValidationResult) {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve(result);
    }

    const listener = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow) return;

      debugLog('Received message from iframe:', event.data);

      const data = event.data;
      if (!data || !data.__challenge_result) return;

      if (data.runtimeError) {
        finishWith({
          status: 'runtime-error',
          passed: false,
          error: data.error || 'Runtime error pada kode.',
          testResults: []
        });
      } else {
        const allPassed = Array.isArray(data.testResults)
          && data.testResults.length > 0
          && data.testResults.every((t: any) => t.passed === true);
        finishWith({
          status: allPassed ? 'correct' : 'incorrect',
          passed: allPassed,
          testResults: data.testResults || [],
        });
      }
    };

    window.addEventListener('message', listener);

    // Timeout
    timeoutId = setTimeout(() => {
      debugLog('Iframe timed out after', VALIDATION_TIMEOUT_MS, 'ms');
      finishWith({
        status: 'validator-error',
        passed: false,
        error: 'Waktu validasi habis. Coba lagi.',
        testResults: []
      });
    }, VALIDATION_TIMEOUT_MS);

    // ---------------------------------------------------------------
    // SCRIPT ARCHITECTURE
    //
    // We build TWO separate <script> tags injected sequentially:
    //
    //   Script 1 (error-catcher): Sets up window.onerror to catch
    //   runtime errors from the student code and post them back.
    //
    //   Script 2 (student code + test runner): Contains the student's
    //   transpiled JS at the TOP LEVEL (no wrapping block), followed
    //   by the test runner. Because both are at the script's top level,
    //   `let`/`const` from the student code are in the script scope
    //   and accessible to the test runner below via eval().
    //
    //   If the student code throws (e.g. ReferenceError), execution
    //   stops and window.onerror fires, sending back the error.
    // ---------------------------------------------------------------
    const escapedTests = JSON.stringify(tests);

    const errorCatcherScript = `
window.__challengeErrored = false;
window.onerror = function(msg) {
  if (!window.__challengeErrored) {
    window.__challengeErrored = true;
    window.parent.postMessage({
      __challenge_result: true,
      runtimeError: true,
      error: 'Runtime Error: ' + msg
    }, "*");
  }
  return true; // prevent default error logging
};
`;

    const testRunner = `
if (!window.__challengeErrored) {
  (function() {
    var __tests = ${escapedTests};
    var __results = [];

    for (var __i = 0; __i < __tests.length; __i++) {
      try {
        var __passed = eval('(function(){ ' + __tests[__i].testCode + ' })()');
        __results.push({
          description: __tests[__i].description,
          passed: __passed === true
        });
      } catch (__e) {
        __results.push({
          description: __tests[__i].description,
          passed: false,
          error: __e.message
        });
      }
    }

    window.parent.postMessage({
      __challenge_result: true,
      testResults: __results
    }, "*");
  })();
}
`;

    // Student code runs at top level, test runner follows at top level
    const mainScript = jsCode + '\n' + testRunner;

    debugLog('Injecting scripts into iframe...');

    try {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) {
        debugLog('iframe.contentDocument is null');
        finishWith({
          status: 'validator-error',
          passed: false,
          error: 'Tidak dapat membuat execution context.',
          testResults: []
        });
        return;
      }

      // Script 1: error catcher
      const script1 = iframeDoc.createElement('script');
      script1.textContent = errorCatcherScript;
      iframeDoc.head.appendChild(script1);

      // Script 2: student code + test runner
      const script2 = iframeDoc.createElement('script');
      script2.textContent = mainScript;
      iframeDoc.body.appendChild(script2);

      debugLog('Scripts injected successfully.');
    } catch (err: any) {
      debugLog('Failed to inject script:', err);
      finishWith({
        status: 'validator-error',
        passed: false,
        error: 'Tidak dapat membuat execution context: ' + err.message,
        testResults: []
      });
    }
  });
}
