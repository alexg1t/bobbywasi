/**
 * Safety Levels for Experiments
 * 
 * GREEN: Safe for autonomous use by children
 * YELLOW: Supervision suggested, requires safety quiz
 * RED: Supervision mandatory, requires adult gate
 */
export enum SafetyLevel {
  GREEN = 'green',
  YELLOW = 'yellow',
  RED = 'red',
}

export const SAFETY_LEVEL_CONFIG = {
  [SafetyLevel.GREEN]: {
    label: 'Autónomo',
    description: 'Seguro para uso sin supervisión',
    icon: '🟢',
    requiresAdultGate: false,
    requiresSafetyQuiz: false,
  },
  [SafetyLevel.YELLOW]: {
    label: 'Supervisión Sugerida',
    description: 'Se recomienda supervisión de un adulto',
    icon: '🟡',
    requiresAdultGate: false,
    requiresSafetyQuiz: true,
  },
  [SafetyLevel.RED]: {
    label: 'Supervisión Obligatoria',
    description: 'Requiere supervisión constante de un adulto',
    icon: '🔴',
    requiresAdultGate: true,
    requiresSafetyQuiz: true,
  },
} as const;

// Made with Bob
