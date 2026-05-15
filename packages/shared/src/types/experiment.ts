import { SafetyLevel } from '../constants/safety-levels';
import { HazardTag, HazardSeverity } from '../constants/hazards';
import { PPE } from '../constants/ppe';
import { MaterialSource, ExperimentLevel } from '../constants/material-sources';

/**
 * Core Experiment Type
 */
export interface Experiment {
  id: string;
  slug: string;
  version: string;
  metadata: ExperimentMetadata;
  safety: SafetyInfo;
  materials: Materials;
  instructions: Instructions;
  science: ScienceExplanation;
  extensions: ExperimentExtensions;
  media: ExperimentMedia;
  credits: ExperimentCredits;
  tracking: ExperimentTracking;
}

/**
 * Metadata
 */
export interface ExperimentMetadata {
  title: string;
  description: string;
  level: ExperimentLevel;
  safetyLevel: SafetyLevel;
  duration: Duration;
  ageRange: AgeRange;
  subjects: string[];
  keywords: string[];
}

export interface Duration {
  preparation: number;
  execution: number;
  cleanup: number;
  unit: 'minutes' | 'hours';
}

export interface AgeRange {
  min: number;
  max: number;
  recommended: number;
}

/**
 * Safety Information
 */
export interface SafetyInfo {
  level: SafetyLevel;
  hazards: Hazard[];
  requiredPPE: PPE[];
  supervisionRequired: boolean;
  adultGateRequired: boolean;
  warnings: string[];
  emergencyProcedures: string[];
}

export interface Hazard {
  tag: HazardTag;
  severity: HazardSeverity;
  description: string;
}

/**
 * Materials
 */
export interface Materials {
  home: Material[];
  supermarket: Material[];
  pharmacy: Material[];
  hardware: Material[];
  optional: Material[];
  totalEstimatedCost: number;
  currency: string;
}

export interface Material {
  name: string;
  quantity: number;
  unit: string;
  alternatives?: string[];
  notes?: string;
  estimatedCost?: number;
  currency?: string;
  specifications?: string;
  purpose?: string;
}

/**
 * Instructions
 */
export interface Instructions {
  preparation: InstructionStep[];
  execution: InstructionStep[];
  cleanup: InstructionStep[];
}

export interface InstructionStep {
  step: number;
  action: string;
  details?: string;
  duration: number;
  safetyNote?: string;
  hazardTags?: HazardTag[];
  criticalStep?: boolean;
  image?: string;
}

/**
 * Science Explanation
 */
export interface ScienceExplanation {
  principle: string;
  explanation: string;
  concepts: Concept[];
  realWorldApplications: string[];
  furtherReading: Resource[];
}

export interface Concept {
  name: string;
  description: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'book' | 'website';
}

/**
 * Extensions
 */
export interface ExperimentExtensions {
  variations: string[];
  challenges: string[];
  relatedExperiments: string[];
}

/**
 * Media
 */
export interface ExperimentMedia {
  thumbnail: string;
  gallery: string[];
  video?: Video;
}

export interface Video {
  url: string;
  duration: number;
  language: string;
}

/**
 * Credits
 */
export interface ExperimentCredits {
  author: string;
  contributors: string[];
  reviewedBy: string[];
  lastReviewed: string;
  version: string;
}

/**
 * Tracking
 */
export interface ExperimentTracking {
  created: string;
  updated: string;
  views: number;
  completions: number;
  rating: number;
  difficulty_feedback: DifficultyFeedback[];
}

export interface DifficultyFeedback {
  userId: string;
  rating: number;
  comment?: string;
  timestamp: string;
}

// Made with Bob
