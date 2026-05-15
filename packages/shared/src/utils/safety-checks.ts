import { SafetyLevel } from '../constants/safety-levels';
import type { Experiment } from '../types/experiment';
import type { SafetyMode } from '../types/safety';

/**
 * Check if an experiment is accessible based on safety mode
 */
export function isExperimentAccessible(
  experiment: Experiment,
  safetyMode: SafetyMode
): boolean {
  if (!safetyMode.enabled) {
    return true;
  }
  
  return safetyMode.allowedLevels.includes(experiment.metadata.safetyLevel);
}

/**
 * Filter experiments based on safety mode
 */
export function filterExperimentsBySafetyMode(
  experiments: Experiment[],
  safetyMode: SafetyMode
): Experiment[] {
  if (!safetyMode.enabled) {
    return experiments;
  }
  
  return experiments.filter((exp) => 
    safetyMode.allowedLevels.includes(exp.metadata.safetyLevel)
  );
}

/**
 * Check if adult gate is required for an experiment
 */
export function requiresAdultGate(experiment: Experiment): boolean {
  return experiment.safety.adultGateRequired || 
         experiment.metadata.safetyLevel === SafetyLevel.RED;
}

/**
 * Check if safety quiz is required for an experiment
 */
export function requiresSafetyQuiz(experiment: Experiment): boolean {
  return experiment.metadata.safetyLevel === SafetyLevel.YELLOW ||
         experiment.metadata.safetyLevel === SafetyLevel.RED;
}

/**
 * Check if supervision is required for an experiment
 */
export function requiresSupervision(experiment: Experiment): boolean {
  return experiment.safety.supervisionRequired ||
         experiment.metadata.safetyLevel !== SafetyLevel.GREEN;
}

/**
 * Get safety level color
 */
export function getSafetyLevelColor(level: SafetyLevel): string {
  switch (level) {
    case SafetyLevel.GREEN:
      return 'green';
    case SafetyLevel.YELLOW:
      return 'yellow';
    case SafetyLevel.RED:
      return 'red';
    default:
      return 'gray';
  }
}

/**
 * Get safety level icon
 */
export function getSafetyLevelIcon(level: SafetyLevel): string {
  switch (level) {
    case SafetyLevel.GREEN:
      return '🟢';
    case SafetyLevel.YELLOW:
      return '🟡';
    case SafetyLevel.RED:
      return '🔴';
    default:
      return '⚪';
  }
}

/**
 * Calculate total experiment duration in minutes
 */
export function calculateTotalDuration(experiment: Experiment): number {
  const { preparation, execution, cleanup, unit } = experiment.metadata.duration;
  const total = preparation + execution + cleanup;
  
  return unit === 'hours' ? total * 60 : total;
}

/**
 * Check if experiment is suitable for age
 */
export function isSuitableForAge(experiment: Experiment, age: number): boolean {
  const { min, max } = experiment.metadata.ageRange;
  return age >= min && age <= max;
}

/**
 * Get experiments suitable for age range
 */
export function filterExperimentsByAge(
  experiments: Experiment[],
  age: number
): Experiment[] {
  return experiments.filter((exp) => isSuitableForAge(exp, age));
}

// Made with Bob
