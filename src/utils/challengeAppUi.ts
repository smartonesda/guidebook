import { getAvailableChapters, generateChallengeSet, calculateScore, getMaxQuestionsForRange, type ScoreReport } from './challengeEngine';
import { getSession, saveSession, clearSession, getStudentInfo, saveStudentInfo, formatDateIndonesian, type ChallengeSession } from './session';
import { validateCode } from './tsValidator';

export function initChallengeApp() {
  const viewSetup = document.getElementById('view-setup');
  const viewRunner = document.getElementById('view-runner');
  const viewResults = document.getElementById('view-results');

  if (!viewSetup || !viewRunner || !viewResults) return;

  // Setup View Elements
  const inputName = document.getElementById('student-name') as HTMLInputElement;
  const inputId = document.getElementById('student-id') as HTMLInputElement;
  const selectStart = document.getElementById('start-chapter') as HTMLSelectElement;
  const selectEnd = document.getElementById('end-chapter') as HTMLSelectElement;
  const selectCount = document.getElementById('question-count') as HTMLSelectElement;
  const btnStart = document.getElementById('btn-start-challenge') as HTMLButtonElement;
  const setupError = document.getElementById('setup-error') as HTMLDivElement;
  const summaryScope = document.getElementById('summary-scope') as HTMLSpanElement;
  const summaryCount = document.getElementById('summary-count') as HTMLSpanElement;
  const summaryTime = document.getElementById('summary-time') as HTMLSpanElement;

  // Runner View Elements
  const runnerProgressText = document.getElementById('runner-progress-text') as HTMLElement;
  const runnerProgressBar = document.getElementById('runner-progress-bar') as HTMLElement;
  const runnerTopic = document.getElementById('runner-chapter-topic') as HTMLElement;
  const chipDifficulty = document.getElementById('chip-difficulty') as HTMLElement;
  const chipType = document.getElementById('chip-type') as HTMLElement;
  const runnerTitle = document.getElementById('runner-title') as HTMLElement;
  const runnerDesc = document.getElementById('runner-desc') as HTMLElement;
  const runnerInst = document.getElementById('runner-instructions') as HTMLElement;
  const runnerEditor = document.getElementById('runner-editor') as HTMLTextAreaElement;
  const editorGutter = document.getElementById('editor-gutter') as HTMLElement;

  const btnRun = document.getElementById('btn-run') as HTMLButtonElement;
  const btnGiveUpPrompt = document.getElementById('btn-give-up-prompt') as HTMLButtonElement;

  // Modals
  const modalError = document.getElementById('modal-error') as HTMLDialogElement;
  const modalErrorDetails = document.getElementById('modal-error-details') as HTMLElement;
  const modalErrorAttempt = document.getElementById('modal-error-attempt') as HTMLElement;
  const btnModalRetry = document.getElementById('btn-modal-retry') as HTMLButtonElement;

  const modalSuccess = document.getElementById('modal-success') as HTMLDialogElement;
  const modalSuccessExplanation = document.getElementById('modal-success-explanation') as HTMLElement;
  const modalSuccessAttempt = document.getElementById('modal-success-attempt') as HTMLElement;
  const btnModalNextSuccess = document.getElementById('btn-modal-next-success') as HTMLButtonElement;

  const modalGiveupConfirm = document.getElementById('modal-giveup-confirm') as HTMLDialogElement;
  const btnModalCancelGiveup = document.getElementById('btn-modal-cancel-giveup') as HTMLButtonElement;
  const btnModalConfirmGiveup = document.getElementById('btn-modal-confirm-giveup') as HTMLButtonElement;

  const modalGivenupResult = document.getElementById('modal-givenup-result') as HTMLDialogElement;
  const modalGivenupSolution = document.getElementById('modal-givenup-solution') as HTMLElement;
  const modalGivenupExplanation = document.getElementById('modal-givenup-explanation') as HTMLElement;
  const btnModalNextGivenup = document.getElementById('btn-modal-next-givenup') as HTMLButtonElement;

  const modalFatalError = document.getElementById('modal-fatal-error') as HTMLDialogElement;
  const modalFatalDetails = document.getElementById('modal-fatal-details') as HTMLElement;
  const btnModalFatalClose = document.getElementById('btn-modal-fatal-close') as HTMLButtonElement;

  // State
  let session = getSession();

  function showView(view: 'setup' | 'runner' | 'results') {
    if (viewSetup) viewSetup.style.display = view === 'setup' ? 'block' : 'none';
    if (viewRunner) viewRunner.style.display = view === 'runner' ? 'block' : 'none';
    if (viewResults) viewResults.style.display = view === 'results' ? 'block' : 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // Gutter / Line Numbers Synchronization
  // =========================================================================
  function updateEditorGutter() {
    if (!runnerEditor || !editorGutter) return;
    const lines = runnerEditor.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) {
      numbers += i + '\n';
    }
    editorGutter.textContent = numbers;
  }

  runnerEditor.addEventListener('input', updateEditorGutter);
  runnerEditor.addEventListener('scroll', () => {
    if (editorGutter) {
      editorGutter.scrollTop = runnerEditor.scrollTop;
    }
  });

  // Handle Tab key in editor (insert 2 spaces)
  runnerEditor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value = this.value.substring(0, start) + "  " + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
      updateEditorGutter();
    }
  });

  // =========================================================================
  // INITIAL ROUTING
  // =========================================================================
  if (session && !session.isCompleted) {
    showView('runner');
    renderCurrentChallenge();
  } else if (session && session.isCompleted) {
    showView('results');
    renderResults();
  } else {
    initSetupView();
    showView('setup');
  }

  // =========================================================================
  // SETUP VIEW LOGIC
  // =========================================================================
  function updateSetupSummary() {
    const start = parseInt(selectStart.value) || 1;
    const end = parseInt(selectEnd.value) || 1;
    const count = parseInt(selectCount.value) || 10;

    if (summaryScope) {
      summaryScope.textContent = `Bab ${start} — Bab ${end}`;
    }
    if (summaryCount) {
      summaryCount.textContent = `${count} Tantangan`;
    }
    if (summaryTime) {
      const minEst = Math.max(5, count * 2);
      const maxEst = Math.max(10, count * 3);
      summaryTime.textContent = `±${minEst}–${maxEst} menit`;
    }
  }

  function initSetupView() {
    // Pre-fill identity from previous session or stored student info
    const storedStudent = getStudentInfo();
    if (storedStudent.name && inputName) {
      inputName.value = storedStudent.name;
    }
    if (storedStudent.id && inputId) {
      inputId.value = storedStudent.id;
    }

    const chapters = getAvailableChapters();
    selectStart.innerHTML = '';
    selectEnd.innerHTML = '';

    chapters.forEach(ch => {
      selectStart.innerHTML += `<option value="${ch}">Bab ${ch}</option>`;
      selectEnd.innerHTML += `<option value="${ch}">Bab ${ch}</option>`;
    });

    if (chapters.length > 0) {
      selectEnd.value = chapters[chapters.length - 1].toString();
    }

    selectStart.addEventListener('change', updateSetupSummary);
    selectEnd.addEventListener('change', updateSetupSummary);
    selectCount.addEventListener('change', updateSetupSummary);
    updateSetupSummary();
  }

  btnStart.addEventListener('click', () => {
    setupError.style.display = 'none';
    setupError.textContent = '';

    const studentName = inputName.value.trim();
    const studentId = inputId.value.trim();

    // Validate Student Identity
    if (!studentName) {
      setupError.textContent = "Nama lengkap wajib diisi.";
      setupError.style.display = 'block';
      inputName.focus();
      return;
    }

    if (!studentId) {
      setupError.textContent = "Nomor absen wajib diisi.";
      setupError.style.display = 'block';
      inputId.focus();
      return;
    }

    const parsedId = parseInt(studentId, 10);
    if (isNaN(parsedId) || parsedId <= 0) {
      setupError.textContent = "Nomor absen harus berupa angka positif yang valid (contoh: 17).";
      setupError.style.display = 'block';
      inputId.focus();
      return;
    }

    // Validate Chapter Selection
    const start = parseInt(selectStart.value);
    const end = parseInt(selectEnd.value);
    const count = parseInt(selectCount.value);

    if (start > end) {
      setupError.textContent = "Bab mulai tidak boleh lebih besar dari bab akhir.";
      setupError.style.display = 'block';
      selectStart.focus();
      return;
    }

    const maxAvailable = getMaxQuestionsForRange(start, end);
    if (maxAvailable === 0) {
      setupError.textContent = "Tidak ada tantangan yang tersedia untuk rentang bab ini.";
      setupError.style.display = 'block';
      return;
    }

    // Save student info for next time
    saveStudentInfo(studentName, studentId);

    const actualCount = Math.min(count, maxAvailable);
    const challenges = generateChallengeSet(start, end, actualCount);

    session = {
      startChapter: start,
      endChapter: end,
      questionCount: actualCount,
      challenges,
      currentIndex: 0,
      attempts: {},
      startTime: Date.now(),
      isCompleted: false,
      studentName,
      studentId
    };

    saveSession(session);
    showView('runner');
    renderCurrentChallenge();
  });

  // =========================================================================
  // RUNNER VIEW LOGIC
  // =========================================================================
  function renderCurrentChallenge() {
    if (!session) return;

    const challenge = session.challenges[session.currentIndex];
    const attemptData = session.attempts[challenge.id];

    // Header & Progress
    runnerProgressText.textContent = `${session.currentIndex + 1} / ${session.challenges.length}`;
    const progressPercent = Math.round(((session.currentIndex + 1) / session.challenges.length) * 100);
    runnerProgressBar.style.width = `${progressPercent}%`;
    runnerTopic.textContent = `Bab ${challenge.chapter} — ${challenge.topic}`;

    // Metadata chips
    if (chipDifficulty) {
      chipDifficulty.className = 'meta-chip';
      if (challenge.difficulty === 'easy') {
        chipDifficulty.textContent = 'Mudah';
        chipDifficulty.classList.add('chip-easy');
      } else if (challenge.difficulty === 'medium') {
        chipDifficulty.textContent = 'Sedang';
        chipDifficulty.classList.add('chip-medium');
      } else {
        chipDifficulty.textContent = 'Sulit';
        chipDifficulty.classList.add('chip-hard');
      }
    }

    if (chipType) {
      chipType.textContent = challenge.skill || 'Problem Solving';
    }

    // Problem Info
    runnerTitle.textContent = challenge.title;
    runnerDesc.textContent = challenge.description;

    if (challenge.instructions) {
      runnerInst.textContent = challenge.instructions;
      runnerInst.parentElement!.style.display = 'block';
    } else {
      runnerInst.parentElement!.style.display = 'none';
    }

    // Editor Code
    if (attemptData && attemptData.code) {
      runnerEditor.value = attemptData.code;
    } else {
      runnerEditor.value = challenge.starterCode || '';
    }

    updateEditorGutter();

    // Check if already completed in current session
    if (attemptData?.isCorrect) {
      showSuccessModal();
    } else if (attemptData?.gaveUp) {
      showGivenUpModal();
    }
  }

  btnRun.addEventListener('click', async () => {
    if (!session) return;
    const challenge = session.challenges[session.currentIndex];
    const code = runnerEditor.value;

    if (!session.attempts[challenge.id]) {
      session.attempts[challenge.id] = {
        challengeId: challenge.id,
        attempts: 0,
        isCorrect: false,
        gaveUp: false,
        code: ""
      };
    }

    session.attempts[challenge.id].attempts++;
    session.attempts[challenge.id].code = code;

    btnRun.innerHTML = `<span>Memproses...</span>`;
    btnRun.disabled = true;

    const result = await validateCode(code, challenge.tests);

    btnRun.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      <span>Jalankan Kode</span>
    `;
    btnRun.disabled = false;

    saveSession(session);

    if (result.status === 'validator-error') {
      modalFatalDetails.textContent = result.error || 'Terjadi masalah teknis saat memeriksa kode di sandbox.';
      modalFatalError.showModal();
    } else if (result.status === 'syntax-error') {
      modalErrorAttempt.textContent = `Percobaan ke-${session.attempts[challenge.id].attempts}`;
      modalErrorDetails.innerHTML = `<div><strong>Syntax Error:</strong>\n${result.error || 'Periksa kembali sintaks kode TypeScript kamu.'}</div>`;
      modalError.showModal();
    } else if (result.status === 'runtime-error') {
      modalErrorAttempt.textContent = `Percobaan ke-${session.attempts[challenge.id].attempts}`;
      modalErrorDetails.innerHTML = `<div><strong>Runtime Error:</strong>\n${result.error || 'Kode mengalami kegagalan saat dieksekusi.'}</div>`;
      modalError.showModal();
    } else if (result.status === 'correct') {
      session.attempts[challenge.id].isCorrect = true;
      saveSession(session);
      showSuccessModal();
    } else {
      modalErrorAttempt.textContent = `Percobaan ke-${session.attempts[challenge.id].attempts}`;
      modalErrorDetails.innerHTML = '';
      result.testResults.forEach(tr => {
        if (!tr.passed) {
          modalErrorDetails.innerHTML += `<div>✗ ${tr.description}${tr.error ? ` (${tr.error})` : ''}</div>`;
        }
      });
      modalError.showModal();
    }
  });

  // Modal Closers & Retry
  btnModalFatalClose.addEventListener('click', () => modalFatalError.close());

  btnModalRetry.addEventListener('click', () => {
    modalError.close();
    runnerEditor.focus();
  });

  // Give Up Flow
  btnGiveUpPrompt.addEventListener('click', () => {
    modalGiveupConfirm.showModal();
  });

  btnModalCancelGiveup.addEventListener('click', () => {
    modalGiveupConfirm.close();
  });

  btnModalConfirmGiveup.addEventListener('click', () => {
    modalGiveupConfirm.close();
    if (!session) return;
    const challenge = session.challenges[session.currentIndex];

    if (!session.attempts[challenge.id]) {
      session.attempts[challenge.id] = {
        challengeId: challenge.id,
        attempts: 1,
        isCorrect: false,
        gaveUp: false,
        code: runnerEditor.value
      };
    }

    session.attempts[challenge.id].gaveUp = true;
    session.attempts[challenge.id].code = runnerEditor.value;
    saveSession(session);

    showGivenUpModal();
  });

  function showSuccessModal() {
    if (!session) return;
    const challenge = session.challenges[session.currentIndex];
    const attempts = session.attempts[challenge.id]?.attempts || 1;

    modalSuccessAttempt.textContent = `Percobaan: ${attempts}x`;

    if (challenge.explanation) {
      modalSuccessExplanation.innerHTML = `<strong>Penjelasan:</strong><p style="margin: 0.35rem 0 0 0;">${challenge.explanation}</p>`;
      modalSuccessExplanation.style.display = 'block';
    } else {
      modalSuccessExplanation.style.display = 'none';
    }

    modalSuccess.showModal();
  }

  function showGivenUpModal() {
    if (!session) return;
    const challenge = session.challenges[session.currentIndex];

    modalGivenupSolution.textContent = challenge.solution || '// Solusi tidak tersedia.';

    if (challenge.explanation) {
      modalGivenupExplanation.innerHTML = `<strong>Penjelasan:</strong><p style="margin: 0.35rem 0 0 0;">${challenge.explanation}</p>`;
      modalGivenupExplanation.style.display = 'block';
    } else {
      modalGivenupExplanation.style.display = 'none';
    }

    modalGivenupResult.showModal();
  }

  function nextChallenge() {
    if (!session) return;
    if (session.currentIndex < session.challenges.length - 1) {
      session.currentIndex++;
      saveSession(session);
      renderCurrentChallenge();
    } else {
      session.isCompleted = true;
      saveSession(session);
      showView('results');
      renderResults();
    }
  }

  btnModalNextSuccess.addEventListener('click', () => {
    modalSuccess.close();
    nextChallenge();
  });

  btnModalNextGivenup.addEventListener('click', () => {
    modalGivenupResult.close();
    nextChallenge();
  });

  // =========================================================================
  // RESULTS VIEW LOGIC
  // =========================================================================
  function renderResults() {
    if (!session) return;

    const report: ScoreReport = calculateScore(session);
    const studentName = session.studentName || 'Peserta';
    const studentId = session.studentId || '-';
    const dateFormatted = formatDateIndonesian(session.startTime);
    const scopeText = `Bab ${session.startChapter} — Bab ${session.endChapter}`;

    // 1. Populate Header & Print Meta
    const resName = document.getElementById('results-student-name');
    const resId = document.getElementById('results-student-id');
    const resDate = document.getElementById('results-date');
    const resScope = document.getElementById('results-scope');

    if (resName) resName.textContent = studentName;
    if (resId) resId.textContent = studentId;
    if (resDate) resDate.textContent = dateFormatted;
    if (resScope) resScope.textContent = scopeText;

    const printName = document.getElementById('print-student-name');
    const printId = document.getElementById('print-student-id');
    const printDate = document.getElementById('print-date');
    const printScope = document.getElementById('print-scope');

    if (printName) printName.textContent = studentName;
    if (printId) printId.textContent = studentId;
    if (printDate) printDate.textContent = dateFormatted;
    if (printScope) printScope.textContent = scopeText;

    // 2. Populate Score Card
    const scoreVal = document.getElementById('results-score');
    const gradeVal = document.getElementById('results-grade');
    if (scoreVal) scoreVal.textContent = `${report.overallScore}%`;

    if (gradeVal) {
      if (report.overallScore >= 85) {
        gradeVal.textContent = 'Istimewa (Mastery)';
        gradeVal.style.color = '#4ade80';
      } else if (report.overallScore >= 75) {
        gradeVal.textContent = 'Sangat Baik';
        gradeVal.style.color = '#4ade80';
      } else if (report.overallScore >= 60) {
        gradeVal.textContent = 'Cukup Baik';
        gradeVal.style.color = '#fbbf24';
      } else {
        gradeVal.textContent = 'Perlu Peningkatan';
        gradeVal.style.color = '#f87171';
      }
    }

    // 3. Stats Grid
    const statComp = document.getElementById('stat-completed');
    const statAtt = document.getElementById('stat-attempts');
    const statCorr = document.getElementById('stat-correct');
    const statGave = document.getElementById('stat-gaveup');

    if (statComp) statComp.textContent = `${report.completed} / ${report.totalQuestions}`;
    if (statAtt) statAtt.textContent = report.totalAttempts.toString();
    if (statCorr) statCorr.textContent = report.correctCount.toString();
    if (statGave) statGave.textContent = report.giveUpCount.toString();

    // 4. Chapter Performance List with Visual Bars
    const chapList = document.getElementById('chapter-performance-list');
    if (chapList) {
      chapList.innerHTML = '';
      for (const [chap, stats] of Object.entries(report.chapterScores)) {
        chapList.innerHTML += `
          <div class="perf-bar-item">
            <div class="perf-bar-label-row">
              <span class="perf-bar-name">Bab ${chap}</span>
              <span class="perf-bar-score">${stats.percentage}% (${stats.correct}/${stats.total})</span>
            </div>
            <div class="perf-track">
              <div class="perf-fill" style="width: ${stats.percentage}%;"></div>
            </div>
          </div>
        `;
      }
    }

    // 5. Skill Performance List with Visual Bars
    const skillList = document.getElementById('skill-performance-list');
    if (skillList) {
      skillList.innerHTML = '';
      for (const [skill, stats] of Object.entries(report.skillScores)) {
        skillList.innerHTML += `
          <div class="perf-bar-item">
            <div class="perf-bar-label-row">
              <span class="perf-bar-name">${skill}</span>
              <span class="perf-bar-score">${stats.percentage}% (${stats.correct}/${stats.total})</span>
            </div>
            <div class="perf-track">
              <div class="perf-fill" style="width: ${stats.percentage}%;"></div>
            </div>
          </div>
        `;
      }
    }

    // 6. Dynamic Insights & Learning Recommendations
    generateLearningInsights(report);
  }

  function generateLearningInsights(report: ScoreReport) {
    const listStrengths = document.getElementById('insights-strengths');
    const listImprove = document.getElementById('insights-improvements');
    const recText = document.getElementById('insights-recommendation');

    if (!listStrengths || !listImprove || !recText) return;

    listStrengths.innerHTML = '';
    listImprove.innerHTML = '';

    const strongSkills: string[] = [];
    const weakSkills: string[] = [];
    const strongChaps: number[] = [];
    const weakChaps: number[] = [];

    for (const [chap, stats] of Object.entries(report.chapterScores)) {
      if (stats.percentage >= 75) {
        strongChaps.push(Number(chap));
      } else {
        weakChaps.push(Number(chap));
      }
    }

    for (const [skill, stats] of Object.entries(report.skillScores)) {
      if (stats.percentage >= 75) {
        strongSkills.push(skill);
      } else {
        weakSkills.push(skill);
      }
    }

    // Strengths
    if (strongSkills.length > 0) {
      strongSkills.forEach(s => {
        listStrengths.innerHTML += `<li>Kemampuan kompetensi <strong>${s}</strong> sangat baik dan konsisten.</li>`;
      });
    }
    if (strongChaps.length > 0) {
      listStrengths.innerHTML += `<li>Pemahaman materi pada <strong>Bab ${strongChaps.join(', ')}</strong> sudah matang.</li>`;
    }
    if (strongSkills.length === 0 && strongChaps.length === 0) {
      listStrengths.innerHTML += `<li>Tetap semangat! Anda telah berusaha menyelesaikan seluruh rangkaian tantangan.</li>`;
    }

    // Improvements
    if (weakSkills.length > 0) {
      weakSkills.forEach(s => {
        listImprove.innerHTML += `<li>Perlu lebih banyak latihan pada kompetensi <strong>${s}</strong>.</li>`;
      });
    }
    if (weakChaps.length > 0) {
      listImprove.innerHTML += `<li>Materi pada <strong>Bab ${weakChaps.join(', ')}</strong> membutuhkan pengulangan dan telaah konsep kembali.</li>`;
    }
    if (report.giveUpCount > 0) {
      listImprove.innerHTML += `<li>Terdapat ${report.giveUpCount} tantangan yang dilewati/menyerah. Coba pelajari kode solusi yang diberikan.</li>`;
    }
    if (weakSkills.length === 0 && weakChaps.length === 0 && report.giveUpCount === 0) {
      listImprove.innerHTML += `<li>Tidak ditemukan kelemahan spesifik. Pertahankan performa luar biasa ini!</li>`;
    }

    // Synthesized Actionable Recommendation
    if (report.overallScore >= 85) {
      recText.textContent = "Luar biasa! Pemahaman konsep dasar hingga penerapan tipe data TypeScript kamu sudah sangat solid. Disarankan melanjutkan ke bab-bab tingkat lanjut seperti Generics, Utility Types, dan Decorators.";
    } else if (report.overallScore >= 65) {
      if (weakChaps.length > 0) {
        recText.textContent = `Disarankan untuk membaca ulang panduan teori pada Bab ${weakChaps.join(', ')} dan mencoba menulis variasi kasus uji coba mandiri sebelum melangkah ke topik berikutnya.`;
      } else {
        recText.textContent = "Pemahaman kamu sudah cukup baik. Luangkan waktu untuk mengamati pesan kesalahan compiler TypeScript secara mendalam agar kecepatan menyelesaikan bug semakin optimal.";
      }
    } else {
      recText.textContent = "Disarankan untuk menelaah kembali materi konsep variabel, tipe primitif, serta pola fungsi pada Bab panduan terkait. Lakukan latihan terpandu langkah demi langkah.";
    }
  }

  // Restart Flow
  const btnRestart = document.getElementById('btn-restart');
  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      clearSession();
      session = null;
      initSetupView();
      showView('setup');
    });
  }

  // Print Flow
  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}
