/**
 * PPE - Personal Protective Equipment
 */
export enum PPE {
  SAFETY_GOGGLES = 'safety_goggles',
  GLOVES = 'gloves',
  LAB_COAT = 'lab_coat',
  MASK = 'mask',
  CLOSED_SHOES = 'closed_shoes',
  APRON = 'apron',
}

export const PPE_CONFIG = {
  [PPE.SAFETY_GOGGLES]: {
    label: 'Gafas de Seguridad',
    description: 'Protección para los ojos contra salpicaduras, partículas y luz intensa',
    icon: '🥽',
    required: true,
    alternatives: ['Gafas de natación', 'Gafas de sol envolventes'],
  },
  [PPE.GLOVES]: {
    label: 'Guantes',
    description: 'Protección para las manos contra químicos, calor o cortes',
    icon: '🧤',
    required: true,
    alternatives: ['Guantes de látex', 'Guantes de nitrilo', 'Guantes de cocina'],
  },
  [PPE.LAB_COAT]: {
    label: 'Bata de Laboratorio',
    description: 'Protección para la ropa contra derrames y salpicaduras',
    icon: '🥼',
    required: false,
    alternatives: ['Camisa vieja de manga larga', 'Delantal grande'],
  },
  [PPE.MASK]: {
    label: 'Mascarilla',
    description: 'Protección respiratoria contra vapores, polvo o partículas',
    icon: '😷',
    required: true,
    alternatives: ['Mascarilla N95', 'Mascarilla quirúrgica', 'Pañuelo húmedo'],
  },
  [PPE.CLOSED_SHOES]: {
    label: 'Zapatos Cerrados',
    description: 'Protección para los pies contra derrames y objetos que caen',
    icon: '👟',
    required: true,
    alternatives: ['Zapatillas deportivas', 'Zapatos escolares'],
  },
  [PPE.APRON]: {
    label: 'Delantal',
    description: 'Protección frontal contra derrames y salpicaduras',
    icon: '👔',
    required: false,
    alternatives: ['Delantal de cocina', 'Camisa vieja'],
  },
} as const;

// Made with Bob
