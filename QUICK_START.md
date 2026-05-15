# 🚀 Guía de Inicio Rápido - STEM Home Lab

## 📋 Resumen del Proyecto

Has creado una **plataforma educativa completa** para experimentos científicos seguros en casa. La plataforma incluye:

- ✅ **7 experimentos completos** listos para usar
- ✅ **Sistema de seguridad de 3 niveles** (Verde, Amarillo, Rojo)
- ✅ **Arquitectura monorepo moderna** con TypeScript
- ✅ **Frontend Next.js 14** con App Router
- ✅ **Sistema de validación** con Zod schemas
- ✅ **Documentación completa** para contribuidores

---

## 🎯 Experimentos Disponibles

### 🟢 Nivel Básico (Autónomo - Sin supervisión requerida)
1. **Volcán de Bicarbonato** - Reacción química clásica
2. **Arcoíris de Densidad** - Capas de líquidos coloridos
3. **Huevo Flotante** - Densidad y flotación
4. **Tinta Invisible** - Oxidación con limón
5. **Globo con Electricidad Estática** - Cargas eléctricas
6. **Cristales de Sal** - Cristalización y evaporación

### 🟡 Nivel Intermedio (Supervisión sugerida)
1. **Electroimán Casero** - Electromagnetismo y circuitos

### 🔴 Nivel Avanzado (Supervisión obligatoria)
1. **Cohete de Agua** - Propulsión y leyes de Newton

---

## 🛠️ Instalación y Configuración

### Prerrequisitos
```bash
# Verificar versiones
node --version  # Debe ser v18 o superior
pnpm --version  # Debe ser v8 o superior
```

### Paso 1: Instalar Dependencias
```bash
# Instalar pnpm si no lo tienes
npm install -g pnpm

# Instalar todas las dependencias del proyecto
pnpm install
```

### Paso 2: Iniciar el Servidor de Desarrollo
```bash
# Iniciar Next.js en modo desarrollo
pnpm dev

# O usar turbo para mejor rendimiento
pnpm turbo dev
```

### Paso 3: Abrir en el Navegador
```
http://localhost:3000
```

---

## 📁 Estructura del Proyecto

```
IBMBOB/
├── apps/
│   └── web/                    # Aplicación Next.js 14
│       ├── src/
│       │   ├── app/           # App Router
│       │   │   ├── page.tsx           # Página principal
│       │   │   ├── experiments/       # Lista de experimentos
│       │   │   └── layout.tsx         # Layout principal
│       │   ├── components/    # Componentes React
│       │   └── lib/          # Utilidades
│       └── package.json
│
├── packages/
│   └── shared/                # Código compartido
│       ├── src/
│       │   ├── types/        # Definiciones TypeScript
│       │   ├── schemas/      # Validación Zod
│       │   ├── constants/    # Constantes del sistema
│       │   └── utils/        # Funciones utilitarias
│       └── package.json
│
├── experiments/               # Base de datos de experimentos
│   ├── basic/                # Experimentos nivel verde
│   ├── intermediate/         # Experimentos nivel amarillo
│   ├── advanced/             # Experimentos nivel rojo
│   ├── _templates/           # Plantillas para nuevos experimentos
│   └── README.md            # Guía de contribución
│
├── package.json              # Configuración raíz
├── pnpm-workspace.yaml       # Configuración de workspaces
├── turbo.json               # Configuración de Turborepo
└── tsconfig.json            # Configuración TypeScript base
```

---

## 🎨 Características Principales

### 1. Sistema de Seguridad de 3 Niveles

#### 🟢 Verde (Autónomo)
- Sin supervisión adulta requerida
- Materiales seguros y comunes
- Sin riesgos significativos
- Ideal para niños de 6-12 años

#### 🟡 Amarillo (Supervisión Sugerida)
- Supervisión adulta recomendada
- Puede involucrar electricidad de bajo voltaje
- Requiere más cuidado
- Ideal para niños de 8-14 años

#### 🔴 Rojo (Supervisión Obligatoria)
- Supervisión adulta OBLIGATORIA
- Puede involucrar presión, proyectiles o calor
- Requiere equipo de protección (gafas)
- Preguntas de seguridad para adultos
- Ideal para niños de 10-16 años

### 2. Formato de Experimentos

Cada experimento incluye:
- ✅ Metadatos completos (título, dificultad, tiempo, edad)
- ✅ Información de seguridad detallada
- ✅ Lista de materiales con costos estimados
- ✅ Instrucciones paso a paso
- ✅ Explicación científica (simple, detallada, técnica)
- ✅ Aplicaciones del mundo real
- ✅ Preguntas de evaluación
- ✅ Variaciones y extensiones
- ✅ Solución de problemas

### 3. Validación Automática

```bash
# Validar todos los experimentos
pnpm validate:experiments

# Validar un experimento específico
pnpm validate:experiment experiments/basic/001-volcan-bicarbonato.json
```

---

## 🔧 Comandos Disponibles

### Desarrollo
```bash
pnpm dev              # Iniciar servidor de desarrollo
pnpm build            # Construir para producción
pnpm start            # Iniciar servidor de producción
pnpm lint             # Ejecutar ESLint
pnpm format           # Formatear código con Prettier
```

### Turborepo (Más rápido)
```bash
pnpm turbo dev        # Dev con caché
pnpm turbo build      # Build con caché
pnpm turbo lint       # Lint con caché
```

### Validación
```bash
pnpm validate:experiments              # Validar todos los experimentos
pnpm validate:experiment <path>        # Validar uno específico
```

---

## 📝 Agregar Nuevos Experimentos

### Opción 1: Usar la Plantilla JSON
```bash
# Copiar plantilla
cp experiments/_templates/experiment-template.json experiments/basic/007-nuevo-experimento.json

# Editar el archivo con tu experimento
# Validar
pnpm validate:experiment experiments/basic/007-nuevo-experimento.json
```

### Opción 2: Usar la Plantilla Markdown
```bash
# Copiar plantilla
cp experiments/_templates/experiment-template.md experiments/basic/007-nuevo-experimento.md

# Completar la plantilla
# Convertir a JSON manualmente o con herramientas
```

### Estructura Mínima Requerida
```json
{
  "id": "basic-007",
  "metadata": {
    "title": "Título del Experimento",
    "difficulty": "basic",
    "estimatedTime": "30 minutos",
    "ageRange": { "min": 6, "max": 12, "recommended": 8 },
    "category": "chemistry"
  },
  "safety": {
    "level": "green",
    "requiresAdultSupervision": false,
    "hazards": [],
    "ppe": [],
    "safetyNotes": []
  },
  "materials": {
    "required": [],
    "optional": [],
    "tools": []
  },
  "instructions": {
    "preparation": { "steps": [], "estimatedTime": "5 minutos" },
    "execution": { "steps": [] },
    "cleanup": { "steps": [], "estimatedTime": "5 minutos" }
  },
  "science": {
    "concepts": [],
    "explanation": {
      "simple": "",
      "detailed": "",
      "technical": ""
    }
  },
  "educational": {
    "learningObjectives": [],
    "skills": []
  }
}
```

---

## 🎓 Próximos Pasos

### Para Desarrolladores

1. **Completar el Frontend**
   - [ ] Página de detalle de experimento individual
   - [ ] Sistema de búsqueda y filtros
   - [ ] Sistema de favoritos
   - [ ] Perfil de usuario

2. **Agregar Backend**
   - [ ] API REST con Express/Fastify
   - [ ] Base de datos (PostgreSQL)
   - [ ] Autenticación de usuarios
   - [ ] Sistema de progreso

3. **Características Avanzadas**
   - [ ] Sistema de comentarios
   - [ ] Galería de fotos de usuarios
   - [ ] Sistema de badges/logros
   - [ ] Modo offline (PWA)

### Para Educadores

1. **Crear Más Experimentos**
   - Usar las plantillas en `experiments/_templates/`
   - Seguir la guía en `experiments/README.md`
   - Validar con `pnpm validate:experiment`

2. **Mejorar Contenido Existente**
   - Añadir videos demostrativos
   - Crear diagramas e ilustraciones
   - Traducir a otros idiomas

3. **Desarrollar Curriculum**
   - Crear secuencias de aprendizaje
   - Alinear con estándares educativos
   - Desarrollar evaluaciones

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
# Limpiar e reinstalar
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Error: TypeScript
```bash
# Verificar configuración
pnpm tsc --noEmit

# Limpiar caché de turbo
pnpm turbo clean
```

### Error: Puerto 3000 en uso
```bash
# Cambiar puerto
PORT=3001 pnpm dev
```

---

## 📚 Documentación Adicional

- **[ARCHITECTURE_PLAN.md](./ARCHITECTURE_PLAN.md)** - Arquitectura técnica completa
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Resumen ejecutivo
- **[experiments/README.md](./experiments/README.md)** - Guía de contribución de experimentos
- **[DEMO_SETUP.md](./DEMO_SETUP.md)** - Configuración detallada de la demo

---

## 🤝 Contribuir

### Reportar Problemas
1. Verificar que el problema no exista ya
2. Crear un issue con descripción detallada
3. Incluir pasos para reproducir

### Enviar Experimentos
1. Usar la plantilla apropiada
2. Validar con el script de validación
3. Crear un Pull Request
4. Esperar revisión

### Mejorar Código
1. Fork del repositorio
2. Crear rama feature
3. Hacer cambios
4. Ejecutar tests y linters
5. Crear Pull Request

---

## 📊 Estado del Proyecto

### ✅ Completado (85%)
- [x] Arquitectura monorepo
- [x] Sistema de tipos TypeScript
- [x] Validación con Zod
- [x] 7 experimentos completos
- [x] Frontend básico Next.js
- [x] Sistema de seguridad
- [x] Documentación completa

### 🚧 En Progreso (10%)
- [ ] Página de detalle de experimento
- [ ] Sistema de búsqueda
- [ ] Más experimentos (objetivo: 20)

### 📋 Pendiente (5%)
- [ ] Backend API
- [ ] Base de datos
- [ ] Autenticación
- [ ] Tests automatizados
- [ ] CI/CD

---

## 📞 Soporte

Para preguntas o ayuda:
1. Revisar la documentación
2. Buscar en issues existentes
3. Crear un nuevo issue
4. Contactar al equipo

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

---

## 🎉 ¡Comienza Ahora!

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar servidor
pnpm dev

# 3. Abrir navegador
# http://localhost:3000

# 4. ¡Explorar experimentos!
```

---

**¡Feliz experimentación! 🔬🧪🚀**