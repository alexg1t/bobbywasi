/**
 * Hazard Tags - Categories of Risk
 */
export enum HazardTag {
  CHEMICAL_REACTION = 'chemical_reaction',
  ELECTRICAL_CIRCUIT = 'electrical_circuit',
  HIGH_TEMPERATURE = 'high_temperature',
  SHARP_OBJECTS = 'sharp_objects',
  FIRE_RISK = 'fire_risk',
  TOXIC_MATERIALS = 'toxic_materials',
  PRESSURE_RISK = 'pressure_risk',
  BIOLOGICAL_HAZARD = 'biological_hazard',
}

export const HAZARD_CONFIG = {
  [HazardTag.CHEMICAL_REACTION]: {
    label: 'Reacción Química',
    description: 'Involucra reacciones químicas que pueden generar calor, gas o cambios de estado',
    icon: '⚗️',
    color: 'blue',
    severity: 'medium',
  },
  [HazardTag.ELECTRICAL_CIRCUIT]: {
    label: 'Circuito Eléctrico',
    description: 'Uso de electricidad, baterías o componentes eléctricos',
    icon: '⚡',
    color: 'yellow',
    severity: 'medium',
  },
  [HazardTag.HIGH_TEMPERATURE]: {
    label: 'Alta Temperatura',
    description: 'Involucra calor, fuego o superficies calientes',
    icon: '🔥',
    color: 'red',
    severity: 'high',
  },
  [HazardTag.SHARP_OBJECTS]: {
    label: 'Objetos Cortantes',
    description: 'Uso de tijeras, cuchillos u objetos punzantes',
    icon: '✂️',
    color: 'orange',
    severity: 'medium',
  },
  [HazardTag.FIRE_RISK]: {
    label: 'Riesgo de Incendio',
    description: 'Materiales inflamables o situaciones que pueden causar fuego',
    icon: '🔥',
    color: 'red',
    severity: 'high',
  },
  [HazardTag.TOXIC_MATERIALS]: {
    label: 'Materiales Tóxicos',
    description: 'Sustancias que pueden ser dañinas si se ingieren, inhalan o tocan',
    icon: '☠️',
    color: 'purple',
    severity: 'high',
  },
  [HazardTag.PRESSURE_RISK]: {
    label: 'Riesgo de Presión',
    description: 'Involucra presión de aire, agua o gas que puede causar explosiones',
    icon: '💥',
    color: 'red',
    severity: 'high',
  },
  [HazardTag.BIOLOGICAL_HAZARD]: {
    label: 'Peligro Biológico',
    description: 'Involucra microorganismos, moho o materiales orgánicos',
    icon: '🦠',
    color: 'green',
    severity: 'medium',
  },
} as const;

export type HazardSeverity = 'low' | 'medium' | 'high';

// Made with Bob
