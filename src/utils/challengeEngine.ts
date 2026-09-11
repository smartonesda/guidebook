import { challengeBank, type Challenge } from '../data/challenges';
import type { ChallengeSession } from './session';

export function getAvailableChapters(): number[] {
  const chapters = new Set(challengeBank.map(c => c.chapter));
  return Array.from(chapters).sort((a, b) => a - b);
}

export function getMaxQuestionsForRange(startChapter: number, endChapter: number): number {
  return challengeBank.filter(c => c.chapter >= startChapter && c.chapter <= endChapter).length;
}

export function generateChallengeSet(startChapter: number, endChapter: number, count: number): Challenge[] {
  const validChallenges = challengeBank.filter(c => c.chapter >= startChapter && c.chapter <= endChapter);
  
  if (validChallenges.length === 0) return [];
  if (validChallenges.length <= count) {
    return validChallenges.sort(() => Math.random() - 0.5);
  }

  const groupedByChapter: Record<number, Challenge[]> = {};
  for (const c of validChallenges) {
    if (!groupedByChapter[c.chapter]) groupedByChapter[c.chapter] = [];
    groupedByChapter[c.chapter].push(c);
  }

  const result: Challenge[] = [];
  const chapters = Object.keys(groupedByChapter).map(Number);
  let chapterIndex = 0;
  
  while (result.length < count) {
    const chap = chapters[chapterIndex];
    if (groupedByChapter[chap].length > 0) {
      const idx = Math.floor(Math.random() * groupedByChapter[chap].length);
      result.push(groupedByChapter[chap][idx]);
      groupedByChapter[chap].splice(idx, 1);
    }
    chapterIndex = (chapterIndex + 1) % chapters.length;
    if (chapters.every(c => groupedByChapter[c].length === 0)) break;
  }

  return result.sort(() => Math.random() - 0.5);
}

export interface ScoreReport {
  overallScore: number;
  totalQuestions: number;
  completed: number;
  totalAttempts: number;
  correctCount: number;
  giveUpCount: number;
  chapterScores: Record<number, { correct: number, total: number, percentage: number }>;
  skillScores: Record<string, { correct: number, total: number, percentage: number }>;
}

export function calculateScore(session: ChallengeSession): ScoreReport {
  let correctCount = 0;
  let giveUpCount = 0;
  let totalAttempts = 0;
  
  const chapterScores: Record<number, { correct: number, total: number }> = {};
  const skillScores: Record<string, { correct: number, total: number }> = {};
  
  for (const c of session.challenges) {
    const attempt = session.attempts[c.id];
    const isCorrect = attempt?.isCorrect || false;
    
    if (isCorrect) correctCount++;
    if (attempt?.gaveUp) giveUpCount++;
    if (attempt) totalAttempts += attempt.attempts;
    
    // Chapter stats
    if (!chapterScores[c.chapter]) chapterScores[c.chapter] = { correct: 0, total: 0 };
    chapterScores[c.chapter].total++;
    if (isCorrect) chapterScores[c.chapter].correct++;
    
    // Skill stats
    if (!skillScores[c.skill]) skillScores[c.skill] = { correct: 0, total: 0 };
    skillScores[c.skill].total++;
    if (isCorrect) skillScores[c.skill].correct++;
  }
  
  const overallScore = session.challenges.length > 0 
    ? Math.round((correctCount / session.challenges.length) * 100) 
    : 0;
    
  const chapterPercents: Record<number, any> = {};
  for (const [chap, stats] of Object.entries(chapterScores)) {
    chapterPercents[Number(chap)] = {
      ...stats,
      percentage: Math.round((stats.correct / stats.total) * 100)
    };
  }
  
  const skillPercents: Record<string, any> = {};
  for (const [skill, stats] of Object.entries(skillScores)) {
    skillPercents[skill] = {
      ...stats,
      percentage: Math.round((stats.correct / stats.total) * 100)
    };
  }
  
  return {
    overallScore,
    totalQuestions: session.challenges.length,
    completed: correctCount + giveUpCount,
    totalAttempts,
    correctCount,
    giveUpCount,
    chapterScores: chapterPercents,
    skillScores: skillPercents
  };
}
