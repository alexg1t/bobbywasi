import { z } from 'zod';
import { SafetyLevel } from '../constants/safety-levels';
import { HazardTag } from '../constants/hazards';
import { PPE } from '../constants/ppe';
import { ExperimentLevel } from '../constants/material-sources';

/**
 * Duration Schema
 */
const DurationSchema = z.object({
  preparation: z.number().min(0),
  execution: z.number().min(0),
  cleanup: z.number().min(0),
  unit: z.enum(['minutes', 'hours']),
});

/**
 * Age Range Schema
 */
const AgeRangeSchema = z.object({
  min: z.number().min(3).max(18),
  max: z.number().min(3).max(18),
  recommended: z.number().min(3).max(18),
}).refine((data) => data.min <= data.max, {
  message: 'Min age must be less than or equal to max age',
}).refine((data) => data.recommended >= data.min && data.recommended <= data.max, {
  message: 'Recommended age must be within min and max range',
});

/**
 * Metadata Schema
 */
const MetadataSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(20).max(500),
  level: z.nativeEnum(ExperimentLevel),
  safetyLevel: z.nativeEnum(SafetyLevel),
  duration: DurationSchema,
  ageRange: AgeRangeSchema,
  subjects: z.array(z.string()).min(1),
  keywords: z.array(z.string()).min(1),
});

/**
 * Hazard Schema
 */
const HazardSchema = z.object({
  tag: z.nativeEnum(HazardTag),
  severity: z.enum(['low', 'medium', 'high']),
  description: z.string().min(10),
});

/**
 * Safety Info Schema
 */
const SafetyInfoSchema = z.object({
  level: z.nativeEnum(SafetyLevel),
  hazards: z.array(HazardSchema),
  requiredPPE: z.array(z.nativeEnum(PPE)),
  supervisionRequired: z.boolean(),
  adultGateRequired: z.boolean(),
  warnings: z.array(z.string()),
  emergencyProcedures: z.array(z.string()),
}).refine((data) => {
  // RED level must require adult gate
  if (data.level === SafetyLevel.RED && !data.adultGateRequired) {
    return false;
  }
  return true;
}, {
  message: 'RED safety level must require adult gate',
});

/**
 * Material Schema
 */
const MaterialSchema = z.object({
  name: z.string().min(2),
  quantity: z.number().min(0),
  unit: z.string(),
  alternatives: z.array(z.string()).optional(),
  notes: z.string().optional(),
  estimatedCost: z.number().min(0).optional(),
  currency: z.string().optional(),
  specifications: z.string().optional(),
  purpose: z.string().optional(),
});

/**
 * Materials Schema
 */
const MaterialsSchema = z.object({
  home: z.array(MaterialSchema),
  supermarket: z.array(MaterialSchema),
  pharmacy: z.array(MaterialSchema),
  hardware: z.array(MaterialSchema),
  optional: z.array(MaterialSchema),
  totalEstimatedCost: z.number().min(0),
  currency: z.string().length(3), // ISO 4217 currency code
});

/**
 * Instruction Step Schema
 */
const InstructionStepSchema = z.object({
  step: z.number().min(1),
  action: z.string().min(10),
  details: z.string().optional(),
  duration: z.number().min(0),
  safetyNote: z.string().optional(),
  hazardTags: z.array(z.nativeEnum(HazardTag)).optional(),
  criticalStep: z.boolean().optional(),
  image: z.string().optional(),
});

/**
 * Instructions Schema
 */
const InstructionsSchema = z.object({
  preparation: z.array(InstructionStepSchema),
  execution: z.array(InstructionStepSchema).min(1),
  cleanup: z.array(InstructionStepSchema),
});

/**
 * Concept Schema
 */
const ConceptSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
});

/**
 * Resource Schema
 */
const ResourceSchema = z.object({
  title: z.string().min(5),
  url: z.string().url(),
  type: z.enum(['article', 'video', 'book', 'website']),
});

/**
 * Science Explanation Schema
 */
const ScienceExplanationSchema = z.object({
  principle: z.string().min(5),
  explanation: z.string().min(50),
  concepts: z.array(ConceptSchema).min(1),
  realWorldApplications: z.array(z.string()).min(1),
  furtherReading: z.array(ResourceSchema),
});

/**
 * Extensions Schema
 */
const ExtensionsSchema = z.object({
  variations: z.array(z.string()),
  challenges: z.array(z.string()),
  relatedExperiments: z.array(z.string()),
});

/**
 * Video Schema
 */
const VideoSchema = z.object({
  url: z.string().url(),
  duration: z.number().min(0),
  language: z.string().length(2), // ISO 639-1 language code
});

/**
 * Media Schema
 */
const MediaSchema = z.object({
  thumbnail: z.string(),
  gallery: z.array(z.string()),
  video: VideoSchema.optional(),
});

/**
 * Credits Schema
 */
const CreditsSchema = z.object({
  author: z.string().min(2),
  contributors: z.array(z.string()),
  reviewedBy: z.array(z.string()),
  lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
  version: z.string().regex(/^\d+\.\d+\.\d+$/), // Semantic versioning
});

/**
 * Difficulty Feedback Schema
 */
const DifficultyFeedbackSchema = z.object({
  userId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  timestamp: z.string().datetime(),
});

/**
 * Tracking Schema
 */
const TrackingSchema = z.object({
  created: z.string().datetime(),
  updated: z.string().datetime(),
  views: z.number().min(0),
  completions: z.number().min(0),
  rating: z.number().min(0).max(5),
  difficulty_feedback: z.array(DifficultyFeedbackSchema),
});

/**
 * Main Experiment Schema
 */
export const ExperimentSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  metadata: MetadataSchema,
  safety: SafetyInfoSchema,
  materials: MaterialsSchema,
  instructions: InstructionsSchema,
  science: ScienceExplanationSchema,
  extensions: ExtensionsSchema,
  media: MediaSchema,
  credits: CreditsSchema,
  tracking: TrackingSchema,
});

/**
 * Type inference from schema
 */
export type ExperimentSchemaType = z.infer<typeof ExperimentSchema>;

// Made with Bob
