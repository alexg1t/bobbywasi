# 🧪 BobbyWasi - Experimentos

Este directorio contiene todos los experimentos de la plataforma STEM Home Lab. Cada experimento está documentado en formato JSON (para la aplicación) y Markdown (para lectura humana).

---

## 📁 Estructura de Directorios

```
experiments/
├── _templates/           # Plantillas para crear nuevos experimentos
│   ├── experiment-template.json
│   └── experiment-template.md
├── basic/               # Experimentos nivel básico (🟢)
├── intermediate/        # Experimentos nivel intermedio (🟡)
├── advanced/            # Experimentos nivel avanzado (🔴)
└── images/              # Imágenes de los experimentos
    ├── basic/
    ├── intermediate/
    └── advanced/
```

---

## 🎯 Niveles de Experimentos

### 🟢 Básico (Green)
- **Edad**: 6-10 años
- **Seguridad**: Autónomo, sin supervisión requerida
- **Complejidad**: Conceptos simples, pocos pasos
- **Materiales**: Fáciles de conseguir, económicos

### 🟡 Intermedio (Yellow)
- **Edad**: 8-14 años
- **Seguridad**: Supervisión sugerida, requiere Safety Quiz
- **Complejidad**: Conceptos más complejos, múltiples pasos
- **Materiales**: Algunos materiales especializados

### 🔴 Avanzado (Red)
- **Edad**: 12-18 años
- **Seguridad**: Supervisión obligatoria, requiere Adult Gate
- **Complejidad**: Conceptos avanzados, procedimientos detallados
- **Materiales**: Materiales especializados, herramientas específicas

---

## ✍️ Cómo Contribuir un Experimento

### 1. Preparación

1. **Fork** el repositorio
2. **Crea una rama** para tu experimento:
   ```bash
   git checkout -b experiment/nombre-del-experimento
   ```

### 2. Crear el Experimento

1. **Copia las plantillas**:
   ```bash
   cp experiments/_templates/experiment-template.json experiments/[level]/###-nombre-experimento.json
   cp experiments/_templates/experiment-template.md experiments/[level]/###-nombre-experimento.md
   ```

2. **Completa todos los campos** siguiendo las instrucciones en las plantillas

3. **Agrega imágenes** en `experiments/images/[level]/`

### 3. Validación

Valida tu experimento antes de hacer commit:

```bash
pnpm validate:experiments
```

El validador verificará:
- ✅ Estructura JSON correcta
- ✅ Todos los campos requeridos presentes
- ✅ Tipos de datos correctos
- ✅ Nivel de seguridad apropiado
- ✅ Hazards y EPP correctamente especificados

### 4. Commit y Pull Request

```bash
git add .
git commit -m "Add: [Nombre del Experimento]"
git push origin experiment/nombre-del-experimento
```

Luego abre un **Pull Request** con:
- Título descriptivo
- Descripción del experimento
- Nivel de seguridad
- Checklist de revisión completada

---

## 📋 Checklist de Calidad

Antes de enviar tu experimento, verifica:

### Contenido
- [ ] Título claro y atractivo
- [ ] Descripción completa y precisa
- [ ] Explicación científica correcta
- [ ] Instrucciones paso a paso detalladas
- [ ] Aplicaciones del mundo real incluidas

### Seguridad
- [ ] Nivel de seguridad apropiado
- [ ] Todos los riesgos identificados
- [ ] EPP especificado correctamente
- [ ] Advertencias claras y específicas
- [ ] Procedimientos de emergencia incluidos

### Materiales
- [ ] Lista completa de materiales
- [ ] Cantidades y unidades especificadas
- [ ] Alternativas sugeridas cuando sea posible
- [ ] Costos estimados incluidos
- [ ] Fuentes de materiales clasificadas

### Formato
- [ ] JSON válido (sin errores de sintaxis)
- [ ] Markdown bien formateado
- [ ] Imágenes incluidas y referenciadas
- [ ] Metadata completa
- [ ] Pasa validación automática

---

## 🔐 Directrices de Seguridad

### Experimentos 🟢 Verde (Básico)
- Sin riesgos significativos
- Materiales no tóxicos
- Sin calor, electricidad o químicos peligrosos
- Apropiado para niños sin supervisión

### Experimentos 🟡 Amarillo (Intermedio)
- Riesgos moderados controlables
- Puede involucrar calor bajo, electricidad de baja tensión
- Requiere Safety Quiz antes de acceder
- Supervisión sugerida

### Experimentos 🔴 Rojo (Avanzado)
- Riesgos significativos
- Involucra calor alto, electricidad, químicos, presión
- Requiere Adult Gate (desafío lógico)
- Supervisión obligatoria de un adulto

---

## 🏷️ Hazard Tags Disponibles

- `chemical_reaction` - Reacciones químicas
- `electrical_circuit` - Circuitos eléctricos
- `high_temperature` - Altas temperaturas
- `sharp_objects` - Objetos cortantes
- `fire_risk` - Riesgo de incendio
- `toxic_materials` - Materiales tóxicos
- `pressure_risk` - Riesgo de presión
- `biological_hazard` - Peligro biológico

---

## 🥽 EPP (Equipo de Protección Personal)

- `safety_goggles` - Gafas de seguridad
- `gloves` - Guantes
- `lab_coat` - Bata de laboratorio
- `mask` - Mascarilla
- `closed_shoes` - Zapatos cerrados
- `apron` - Delantal

---

## 📝 Convenciones de Nomenclatura

### Archivos JSON
```
[level]-[###]-[slug].json
```
Ejemplo: `intermediate-001-electroiman-casero.json`

### Archivos Markdown
```
[level]-[###]-[slug].md
```
Ejemplo: `intermediate-001-electroiman-casero.md`

### Imágenes
```
[slug]-[descriptor].jpg
```
Ejemplo: `electroiman-casero-materials.jpg`

---

## 🎨 Directrices de Imágenes

- **Formato**: JPG o PNG
- **Resolución**: Mínimo 1200x800px
- **Tamaño**: Máximo 500KB por imagen
- **Contenido**: Claro, bien iluminado, enfocado
- **Requeridas**:
  - Thumbnail (miniatura)
  - Materiales completos
  - Proceso (pasos clave)
  - Resultado final

---

## 📚 Recursos Útiles

- [Guía de Contribución](../docs/CONTRIBUTING.md)
- [Directrices de Seguridad](../docs/SAFETY_GUIDELINES.md)
- [Documentación de API](../docs/API_REFERENCE.md)
- [Plan de Arquitectura](../ARCHITECTURE_PLAN.md)

---

## ❓ Preguntas Frecuentes

### ¿Puedo traducir experimentos existentes?
Sí, las traducciones son bienvenidas. Crea una versión con sufijo de idioma (ej: `-es`, `-en`).

### ¿Qué hago si mi experimento no pasa la validación?
Revisa los errores mostrados por el validador y corrige los campos indicados. Si necesitas ayuda, abre un issue.

### ¿Puedo modificar un experimento existente?
Sí, pero incrementa el número de versión y documenta los cambios en el campo `credits`.

### ¿Cómo sugiero mejoras a experimentos existentes?
Abre un issue con tus sugerencias o envía un PR con las mejoras propuestas.

---

## 🤝 Código de Conducta

Al contribuir experimentos, te comprometes a:

1. **Seguridad primero**: Nunca comprometas la seguridad de los niños
2. **Precisión científica**: Asegura que la ciencia sea correcta
3. **Claridad**: Escribe instrucciones claras y comprensibles
4. **Accesibilidad**: Usa materiales accesibles y económicos
5. **Respeto**: Sé respetuoso con otros contribuidores

---

## 📞 Contacto

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/stem-home-lab/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tu-usuario/stem-home-lab/discussions)
- **Email**: experiments@stemhomelab.com

---

**¡Gracias por contribuir a STEM Home Lab! 🚀**

*Juntos estamos inspirando la próxima generación de científicos e ingenieros.*