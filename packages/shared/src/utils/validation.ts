import { ExperimentSchema } from '../schemas/experiment.schema';
import type { Experiment } from '../types/experiment';

/**
 * Validate an experiment against the schema
 */
export function validateExperiment(data: unknown): {
  success: boolean;
  data?: Experiment;
  errors?: string[];
} {
  try {
    const result = ExperimentSchema.safeParse(data);
    
    if (result.success) {
      return {
        success: true,
        data: result.data as Experiment,
      };
    } else {
      return {
        success: false,
        errors: result.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`),
      };
    }
  } catch (error) {
    return {
      success: false,
      errors: ['Unexpected validation error'],
    };
  }
}

/**
 * Validate multiple experiments
 */
export function validateExperiments(experiments: unknown[]): {
  valid: Experiment[];
  invalid: Array<{ index: number; errors: string[] }>;
} {
  const valid: Experiment[] = [];
  const invalid: Array<{ index: number; errors: string[] }> = [];

  experiments.forEach((exp, index) => {
    const result = validateExperiment(exp);
    if (result.success && result.data) {
      valid.push(result.data);
    } else {
      invalid.push({
        index,
        errors: result.errors || ['Unknown error'],
      });
    }
  });

  return { valid, invalid };
}

// Made with Bob
