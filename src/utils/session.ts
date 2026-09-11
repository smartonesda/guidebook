import type { Challenge } from '../data/challenges';

export interface ChallengeAttempt {
  challengeId: string;
  attempts: number;
  isCorrect: boolean;
  gaveUp: boolean;
  code: string; // last submitted code
}

export interface ChallengeSession {
  startChapter: number;
  endChapter: number;
  questionCount: number;
  challenges: Challenge[];
  currentIndex: number;
  attempts: Record<string, ChallengeAttempt>; // mapped by challengeId
  startTime: number;
  isCompleted: boolean;
  studentName?: string;
  studentId?: string;
}

const SESSION_KEY = 'ts-guidebook-challenge-session';

export function getSession(): ChallengeSession | null {
  if (typeof window === 'undefined') return null;
  const data = sessionStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveSession(session: ChallengeSession): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function getStudentInfo(): { name?: string, id?: string } {
  if (typeof window === 'undefined') return {};
  const name = sessionStorage.getItem('student_name')?.trim();
  const id = sessionStorage.getItem('student_id')?.trim();
  return {
    name: name || undefined,
    id: id || undefined,
  };
}

export function saveStudentInfo(name: string, id: string): void {
  if (typeof window === 'undefined') return;
  const trimmedName = name.trim();
  const trimmedId = id.trim();
  if (trimmedName) sessionStorage.setItem('student_name', trimmedName);
  if (trimmedId) sessionStorage.setItem('student_id', trimmedId);
}

export function formatDateIndonesian(timestamp: number = Date.now()): string {
  const date = new Date(timestamp);
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
