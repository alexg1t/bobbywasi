/**
 * User Roles
 */
export enum UserRole {
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  EDUCATOR = 'EDUCATOR',
  ADMIN = 'ADMIN',
}

/**
 * User
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Experiment Completion
 */
export interface ExperimentCompletion {
  id: string;
  userId: string;
  experimentId: string;
  completedAt: Date;
  duration?: number;
  notes?: string;
}

/**
 * Experiment Rating
 */
export interface ExperimentRating {
  id: string;
  userId: string;
  experimentId: string;
  rating: number; // 1-5
  difficulty?: number; // 1-5
  comment?: string;
  createdAt: Date;
}

/**
 * User Session
 */
export interface UserSession {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
}

// Made with Bob
