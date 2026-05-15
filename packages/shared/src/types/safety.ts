import { SafetyLevel } from '../constants/safety-levels';

/**
 * Safety Mode Configuration
 */
export interface SafetyMode {
  enabled: boolean;
  allowedLevels: SafetyLevel[];
}

/**
 * Adult Gate Challenge Types
 */
export enum ChallengeType {
  MATH = 'math',
  LOGIC = 'logic',
  SAFETY = 'safety',
}

/**
 * Adult Gate Challenge
 */
export interface AdultGateChallenge {
  type: ChallengeType;
  question: string;
  answer: string | number;
  options?: string[];
  hint?: string;
}

/**
 * Adult Session
 */
export interface AdultSession {
  id: string;
  userId: string;
  expiresAt: Date;
  challengeType: ChallengeType;
  createdAt: Date;
}

/**
 * Safety Quiz Question
 */
export interface SafetyQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hazardRelated?: string;
}

/**
 * Safety Quiz Result
 */
export interface SafetyQuizResult {
  experimentId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  timestamp: Date;
}

/**
 * Safety Event Types
 */
export enum SafetyEventType {
  ACCESS_DENIED = 'ACCESS_DENIED',
  ADULT_GATE_PASSED = 'ADULT_GATE_PASSED',
  ADULT_GATE_FAILED = 'ADULT_GATE_FAILED',
  SAFETY_QUIZ_PASSED = 'SAFETY_QUIZ_PASSED',
  SAFETY_QUIZ_FAILED = 'SAFETY_QUIZ_FAILED',
  RISK_IDENTIFIED = 'RISK_IDENTIFIED',
  WARNING_SHOWN = 'WARNING_SHOWN',
}

/**
 * Safety Severity
 */
export enum SafetySeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
}

/**
 * Safety Log Entry
 */
export interface SafetyLog {
  id: string;
  experimentId: string;
  eventType: SafetyEventType;
  description: string;
  severity: SafetySeverity;
  userId?: string;
  createdAt: Date;
}

// Made with Bob
