# 🔬 Experimentos Adicionales para BobbyWasi

## ✅ Experimentos Ya Creados (10 total)

### Básicos (6):
1. Volcán de Bicarbonato
2. Arcoíris de Densidad
3. Huevo Flotante
4. Tinta Invisible
5. Globo Estático
6. Cristales de Sal

### Intermedios (3):
1. Electroimán Casero
2. **Circuito Eléctrico Simple** ✨
3. **Motor Eléctrico Casero** ✨

### Avanzados (1):
1. Cohete de Agua

## 📋 4 Experimentos Adicionales Sugeridos

### Experimento 4: Generador de Energía con Limones (Intermedio 🟡)

**Archivo**: `experiments/intermediate/004-generador-limones.json`

```json
{
  "id": "intermediate-004",
  "metadata": {
    "title": "Generador de Energía con Limones",
    "subtitle": "Crea electricidad con frutas",
    "description": "Construye una batería usando limones, clavos de zinc y monedas de cobre. Aprende cómo las reacciones químicas pueden generar electricidad.",
    "difficulty": "intermediate",
    "estimatedTime": "25-35 minutos",
    "ageRange": {"min": 8, "max": 14, "recommended": 10},
    "category": "chemistry",
    "tags": ["electroquímica", "energía", "reacciones", "electricidad"]
  },
  "safety": {
    "level": "yellow",
    "requiresAdultSupervision": true,
    "safetyNotes": [
      "No comer los limones después del experimento",
      "Lavarse las manos después de manipular los metales",
      "No tocar los electrodos con la lengua"
    ]
  },
  "materials": {
    "required": [
      {"name": "Limones frescos", "quantity": "4", "unit": "unidades"},
      {"name": "Clavos de zinc galvanizado", "quantity": "4", "unit": "unidades"},
      {"name": "Monedas de cobre", "quantity": "4", "unit": "unidades"},
      {"name": "Cables con pinzas cocodrilo", "quantity": "5", "unit": "unidades"},
      {"name": "LED de bajo voltaje", "quantity": "1", "unit": "unidad"}
    ]
  },
  "science": {
    "principle": "Celda Electroquímica y Reacciones Redox",
    "explanation": {
      "simple": "El ácido del limón reacciona con los metales (zinc y cobre) creando una diferencia de carga eléctrica. Los electrones fluyen del zinc al cobre a través del cable, generando electricidad suficiente para encender un LED.",
      "detailed": "En cada limón se crea una celda galvánica. El ácido cítrico actúa como electrolito, permitiendo el movimiento de iones. El zinc se oxida (pierde electrones) y el cobre se reduce (gana electrones). Esta diferencia de potencial genera aproximadamente 0.9V por limón. Al conectar 4 limones en serie, obtenemos ~3.6V, suficiente para un LED."
    }
  }
}
```

### Experimento 5: Brújula Electromagnética (Intermedio 🟡)

**Archivo**: `experiments/intermediate/005-brujula-electromagnetica.json`

**Concepto**: Crear una brújula que funciona con electricidad
**Materiales**: Pila, cable, aguja, corcho, recipiente con agua
**Aprende**: Cómo la corriente eléctrica crea campos magnéticos
**Duración**: 20-30 minutos

**Pasos clave**:
1. Magnetizar una aguja pasando corriente por un cable enrollado
2. Colocar la aguja sobre un corcho flotante
3. Observar cómo apunta al norte magnético
4. Experimentar invirtiendo la corriente

### Experimento 6: Alarma Casera con Circuito (Intermedio 🟡)

**Archivo**: `experiments/intermediate/006-alarma-casera.json`

**Concepto**: Sistema de alarma con sensor de contacto
**Materiales**: Pila 9V, buzzer, papel aluminio, cartón, cables
**Aprende**: Circuitos abiertos/cerrados y sensores simples
**Duración**: 30-40 minutos

**Pasos clave**:
1. Crear un circuito con buzzer
2. Hacer un sensor con papel aluminio
3. Instalar en una puerta o caja
4. Probar el sistema de alarma

### Experimento 7: Panel Solar Simple (Avanzado 🔴)

**Archivo**: `experiments/advanced/002-panel-solar.json`

**Concepto**: Energía solar y conversión fotovoltaica
**Materiales**: Panel solar pequeño (6V), motor DC, LED, cables
**Aprende**: Cómo funciona la energía solar
**Duración**: 25-35 minutos
**Supervisión**: OBLIGATORIA

**Pasos clave**:
1. Conectar panel solar a un motor
2. Exponer al sol y observar el movimiento
3. Medir voltaje con multímetro (opcional)
4. Conectar LED y comparar con motor
5. Experimentar con sombra y luz directa

## 🎯 Distribución Final

Con estos 4 experimentos adicionales tendrás:

- **Básicos (6)**: ✅ Completo
- **Intermedios (6)**: ✅ Completo
- **Avanzados (2)**: ✅ Completo

**Total: 14 experimentos**

## 📝 Plantilla Rápida

Para crear cada experimento, usa esta estructura mínima:

```json
{
  "id": "nivel-###",
  "metadata": {
    "title": "Título",
    "subtitle": "Subtítulo",
    "description": "Descripción completa",
    "difficulty": "intermediate/advanced",
    "estimatedTime": "XX-XX minutos",
    "ageRange": {"min": X, "max": X, "recommended": X},
    "category": "physics/chemistry",
    "tags": ["tag1", "tag2"],
    "version": "1.0.0",
    "lastUpdated": "2026-05-15",
    "author": "BobbyWasi Team",
    "language": "es"
  },
  "safety": {
    "level": "yellow/red",
    "requiresAdultSupervision": true,
    "hazards": ["tipo"],
    "ppe": [],
    "safetyNotes": ["Nota 1", "Nota 2"]
  },
  "materials": {
    "required": [
      {
        "name": "Material",
        "quantity": "X",
        "unit": "unidad",
        "specifications": "Detalles",
        "source": "hardware_store"
      }
    ],
    "optional": []
  },
  "instructions": {
    "preparation": {
      "steps": ["Paso 1", "Paso 2"]
    },
    "execution": {
      "steps": [
        {
          "stepNumber": 1,
          "title": "Título",
          "description": "Descripción",
          "duration": "X minutos",
          "warnings": ["Si aplica"]
        }
      ]
    },
    "cleanup": {
      "steps": ["Paso 1"]
    }
  },
  "science": {
    "principle": "Principio",
    "explanation": {
      "simple": "Para niños",
      "detailed": "Más técnico"
    },
    "concepts": [
      {"name": "Concepto", "description": "Descripción"}
    ],
    "realWorldApplications": ["App 1", "App 2"]
  },
  "extensions": {
    "variations": ["Variación 1"],
    "challenges": ["Desafío 1"]
  },
  "metadata_extra": {
    "featured": true,
    "indoor": true,
    "outdoor": false,
    "messy": false,
    "adultParticipation": "recommended/required"
  }
}
```

## 🚀 Próximos Pasos

1. Copia la plantilla para cada experimento
2. Completa los detalles específicos
3. Guarda en la carpeta correspondiente
4. Haz commit y push
5. Verifica en la plataforma

## 💡 Tips

- **Seguridad**: Siempre incluye advertencias claras
- **Pasos**: Detallados y con duración
- **Ciencia**: 3 niveles de explicación
- **Aplicaciones**: Conecta con el mundo real
- **Variaciones**: Ofrece extensiones del aprendizaje