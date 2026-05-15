# 🔬 STEM Home Lab

> **Plataforma educativa para experimentos científicos seguros en casa**

Una plataforma moderna y segura que permite a niños y jóvenes realizar experimentos científicos en casa, con un sistema de seguridad integrado de 3 niveles y contenido educativo de alta calidad.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Características Principales

### 🛡️ Sistema de Seguridad de 3 Niveles

- **🟢 Verde (Autónomo)**: Experimentos seguros sin supervisión adulta
- **🟡 Amarillo (Supervisión Sugerida)**: Experimentos con supervisión recomendada
- **🔴 Rojo (Supervisión Obligatoria)**: Experimentos que requieren supervisión adulta obligatoria con Adult Gate

### 📚 Contenido Educativo Completo

Cada experimento incluye:
- ✅ Instrucciones paso a paso con imágenes
- ✅ Explicación científica en 3 niveles (simple, detallada, técnica)
- ✅ Lista de materiales con costos estimados
- ✅ Información de seguridad detallada
- ✅ Aplicaciones del mundo real
- ✅ Variaciones y extensiones
- ✅ Preguntas de evaluación

### 🏗️ Arquitectura Moderna

- **Monorepo** con pnpm workspaces y Turborepo
- **TypeScript** para seguridad de tipos
- **Next.js 14** con App Router
- **Zod** para validación de datos
- **Tailwind CSS** para estilos
- **Formato JSON** para experimentos (versionado con Git)

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- pnpm 8+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/stem-home-lab.git
cd stem-home-lab

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

📖 **[Ver Guía Completa de Inicio →](./QUICK_START.md)**

---

## 📊 Experimentos Disponibles

### 🟢 Básicos (6 experimentos)
1. **Volcán de Bicarbonato** - Reacción química clásica
2. **Arcoíris de Densidad** - Capas de líquidos con diferentes densidades
3. **Huevo Flotante** - Densidad y flotación con agua salada
4. **Tinta Invisible** - Oxidación con jugo de limón
5. **Globo con Electricidad Estática** - Cargas eléctricas y atracción
6. **Cristales de Sal** - Cristalización y evaporación

### 🟡 Intermedios (1 experimento)
1. **Electroimán Casero** - Electromagnetismo y circuitos eléctricos

### 🔴 Avanzados (1 experimento)
1. **Cohete de Agua** - Propulsión y leyes de Newton

**Total: 8 experimentos completos y funcionales** 🎉

---

## 📁 Estructura del Proyecto

```
stem-home-lab/
├── apps/
│   └── web/                    # Aplicación Next.js 14
│       ├── src/
│       │   ├── app/           # App Router (páginas)
│       │   ├── components/    # Componentes React
│       │   └── lib/          # Utilidades
│       └── package.json
│
├── packages/
│   └── shared/                # Código compartido
│       ├── src/
│       │   ├── types/        # Tipos TypeScript
│       │   ├── schemas/      # Schemas Zod
│       │   ├── constants/    # Constantes
│       │   └── utils/        # Utilidades
│       └── package.json
│
├── experiments/               # Base de datos de experimentos
│   ├── basic/                # 🟢 Nivel verde
│   ├── intermediate/         # 🟡 Nivel amarillo
│   ├── advanced/             # 🔴 Nivel rojo
│   └── _templates/           # Plantillas
│
└── docs/                     # Documentación
```

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
pnpm dev              # Iniciar servidor de desarrollo
pnpm build            # Construir para producción
pnpm start            # Iniciar servidor de producción

# Calidad de código
pnpm lint             # Ejecutar ESLint
pnpm format           # Formatear con Prettier
pnpm type-check       # Verificar tipos TypeScript

# Validación de experimentos
pnpm validate:experiments              # Validar todos
pnpm validate:experiment <path>        # Validar uno específico

# Turborepo (con caché)
pnpm turbo dev        # Dev con caché
pnpm turbo build      # Build con caché
pnpm turbo lint       # Lint con caché
```

---

## 📖 Documentación

- **[🚀 Guía de Inicio Rápido](./QUICK_START.md)** - Comienza aquí
- **[🏗️ Plan de Arquitectura](./ARCHITECTURE_PLAN.md)** - Arquitectura técnica completa
- **[📋 Resumen de Implementación](./IMPLEMENTATION_SUMMARY.md)** - Resumen ejecutivo
- **[🧪 Guía de Experimentos](./experiments/README.md)** - Cómo contribuir experimentos
- **[🎬 Configuración de Demo](./DEMO_SETUP.md)** - Setup detallado de la demo

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Hay varias formas de contribuir:

### 🧪 Agregar Experimentos

1. Usa las plantillas en `experiments/_templates/`
2. Sigue la guía en `experiments/README.md`
3. Valida con `pnpm validate:experiment`
4. Crea un Pull Request

### 💻 Mejorar el Código

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📝 Mejorar Documentación

- Corregir errores tipográficos
- Añadir ejemplos
- Traducir a otros idiomas
- Mejorar explicaciones

---

## 🎯 Roadmap

### Fase 1: MVP (Completado ✅)
- [x] Arquitectura monorepo
- [x] Sistema de tipos TypeScript
- [x] 8 experimentos completos
- [x] Frontend básico Next.js
- [x] Sistema de seguridad de 3 niveles
- [x] Documentación completa

### Fase 2: Expansión de Contenido (En Progreso 🚧)
- [ ] 20+ experimentos totales
- [ ] Página de detalle de experimento
- [ ] Sistema de búsqueda y filtros
- [ ] Videos demostrativos

### Fase 3: Backend y Usuarios (Planeado 📋)
- [ ] API REST
- [ ] Base de datos PostgreSQL
- [ ] Autenticación de usuarios
- [ ] Sistema de progreso y logros

### Fase 4: Características Avanzadas (Futuro 🔮)
- [ ] Modo offline (PWA)
- [ ] Sistema de comentarios
- [ ] Galería de fotos de usuarios
- [ ] App móvil nativa

---

## 🏆 Principios de Diseño

### 1. Seguridad Primero
La seguridad está integrada en el software como una "restricción lógica inquebrantable". No es opcional ni configurable.

### 2. Educación de Calidad
Cada experimento incluye explicaciones científicas rigurosas en múltiples niveles de complejidad.

### 3. Accesibilidad
Materiales comunes y económicos. Instrucciones claras y detalladas.

### 4. Código Abierto
Transparencia total. Cualquiera puede revisar, contribuir y mejorar.

### 5. Escalabilidad
Arquitectura moderna que permite crecer desde 10 hasta 1000+ experimentos.

---

## 🔒 Seguridad

### Sistema de Niveles

#### 🟢 Verde (Autónomo)
- Sin supervisión adulta requerida
- Materiales seguros y comunes
- Sin riesgos significativos
- Edad: 6-12 años

#### 🟡 Amarillo (Supervisión Sugerida)
- Supervisión adulta recomendada
- Puede involucrar electricidad de bajo voltaje
- Requiere más cuidado
- Edad: 8-14 años

#### 🔴 Rojo (Supervisión Obligatoria)
- Supervisión adulta OBLIGATORIA
- Adult Gate con preguntas de seguridad
- Puede involucrar presión, proyectiles o calor
- Requiere equipo de protección
- Edad: 10-16 años

### Validación de Experimentos

Todos los experimentos pasan por validación automática:
```bash
pnpm validate:experiments
```

Esto verifica:
- ✅ Estructura JSON correcta
- ✅ Campos requeridos presentes
- ✅ Tipos de datos correctos
- ✅ Información de seguridad completa
- ✅ Consistencia de datos

---

## 📊 Tecnologías

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **React** - Biblioteca UI

### Backend (Planeado)
- **Node.js** - Runtime
- **Express/Fastify** - API REST
- **PostgreSQL** - Base de datos
- **Prisma** - ORM

### DevOps
- **pnpm** - Gestor de paquetes
- **Turborepo** - Build system
- **ESLint** - Linter
- **Prettier** - Formateador
- **Zod** - Validación de schemas

---

## 📈 Estado del Proyecto

![Progress](https://img.shields.io/badge/Progress-85%25-brightgreen)

- **Arquitectura**: 100% ✅
- **Experimentos**: 40% (8/20) 🚧
- **Frontend**: 70% 🚧
- **Backend**: 0% 📋
- **Tests**: 0% 📋
- **Documentación**: 95% ✅

---

## 👥 Equipo

- **Arquitectura y Desarrollo**: STEM Home Lab Team
- **Contenido Educativo**: Educadores contribuyentes
- **Revisión de Seguridad**: Expertos en seguridad infantil

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- A todos los educadores que contribuyen con experimentos
- A la comunidad open source por las herramientas increíbles
- A los padres y niños que prueban los experimentos

---

## 📞 Contacto y Soporte

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/stem-home-lab/issues)
- **Discusiones**: [GitHub Discussions](https://github.com/tu-usuario/stem-home-lab/discussions)
- **Email**: stem-home-lab@example.com

---

## 🌟 ¡Apóyanos!

Si te gusta este proyecto:
- ⭐ Dale una estrella en GitHub
- 🐛 Reporta bugs
- 💡 Sugiere nuevas características
- 🧪 Contribuye con experimentos
- 📢 Comparte con otros educadores

---

<div align="center">

**[Comenzar Ahora →](./QUICK_START.md)**

Hecho con ❤️ para educadores, padres y niños curiosos

</div>