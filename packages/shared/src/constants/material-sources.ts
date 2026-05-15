/**
 * Material Sources - Where to obtain materials
 */
export enum MaterialSource {
  HOME = 'home',
  SUPERMARKET = 'supermarket',
  PHARMACY = 'pharmacy',
  HARDWARE = 'hardware',
  OPTIONAL = 'optional',
}

export const MATERIAL_SOURCE_CONFIG = {
  [MaterialSource.HOME]: {
    label: 'Casa',
    description: 'Materiales que típicamente se encuentran en casa o pueden reciclarse',
    icon: '🏠',
    color: 'green',
  },
  [MaterialSource.SUPERMARKET]: {
    label: 'Supermercado',
    description: 'Materiales disponibles en supermercados o tiendas de comestibles',
    icon: '🛒',
    color: 'blue',
  },
  [MaterialSource.PHARMACY]: {
    label: 'Farmacia',
    description: 'Materiales disponibles en farmacias o boticas',
    icon: '💊',
    color: 'red',
  },
  [MaterialSource.HARDWARE]: {
    label: 'Ferretería',
    description: 'Materiales disponibles en ferreterías o tiendas de construcción',
    icon: '🔧',
    color: 'orange',
  },
  [MaterialSource.OPTIONAL]: {
    label: 'Opcional',
    description: 'Materiales opcionales que mejoran el experimento pero no son esenciales',
    icon: '✨',
    color: 'purple',
  },
} as const;

/**
 * Experiment Levels
 */
export enum ExperimentLevel {
  BASIC = 'basic',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export const EXPERIMENT_LEVEL_CONFIG = {
  [ExperimentLevel.BASIC]: {
    label: 'Básico',
    description: 'Experimentos simples para principiantes',
    icon: '⭐',
    ageRange: { min: 6, max: 10 },
  },
  [ExperimentLevel.INTERMEDIATE]: {
    label: 'Intermedio',
    description: 'Experimentos con conceptos más complejos',
    icon: '⭐⭐',
    ageRange: { min: 8, max: 14 },
  },
  [ExperimentLevel.ADVANCED]: {
    label: 'Avanzado',
    description: 'Experimentos desafiantes con múltiples pasos',
    icon: '⭐⭐⭐',
    ageRange: { min: 12, max: 18 },
  },
} as const;

// Made with Bob
