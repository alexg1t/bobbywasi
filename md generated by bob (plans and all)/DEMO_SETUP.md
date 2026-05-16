# 🚀 STEM Home Lab - Guía de Setup para Demo Local

Esta guía te ayudará a configurar y ejecutar la demo local de STEM Home Lab en tu máquina.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 20.x o superior ([Descargar](https://nodejs.org/))
- **pnpm** 8.x o superior (se instalará automáticamente con Node.js o ejecuta: `npm install -g pnpm`)
- **Git** (para clonar el repositorio si es necesario)

### Verificar Instalación

```bash
node --version  # Debe mostrar v20.x.x o superior
pnpm --version  # Debe mostrar 8.x.x o superior
```

---

## 🛠️ Instalación Paso a Paso

### 1. Navegar al Directorio del Proyecto

```bash
cd c:/Users/aovks/OneDrive/Escritorio/IBMBOB
```

### 2. Instalar Dependencias

Este comando instalará todas las dependencias del monorepo (root, shared package, y web app):

```bash
pnpm install
```

**Nota**: La primera instalación puede tomar varios minutos dependiendo de tu conexión a internet.

### 3. Verificar la Instalación

Después de la instalación, verifica que los paquetes se hayan instalado correctamente:

```bash
# Verificar estructura de node_modules
ls node_modules

# Verificar que el package shared esté linkeado
ls apps/web/node_modules/@stem-lab
```

---

## 🚀 Ejecutar la Demo

### Opción 1: Ejecutar Solo el Frontend (Recomendado para Demo)

```bash
cd apps/web
pnpm dev
```

La aplicación estará disponible en: **http://localhost:3000**

### Opción 2: Ejecutar Todo el Monorepo

Desde la raíz del proyecto:

```bash
pnpm dev
```

Esto ejecutará todos los proyectos configurados en el monorepo simultáneamente.

---

## 📂 Estructura del Proyecto

```
IBMBOB/
├── apps/
│   └── web/                    # Next.js Frontend (Puerto 3000)
├── packages/
│   └── shared/                 # Tipos, schemas, constantes compartidas
├── experiments/
│   ├── basic/                  # Experimentos nivel básico 🟢
│   │   └── 001-volcan-bicarbonato.json
│   ├── intermediate/           # Experimentos nivel intermedio 🟡
│   └── advanced/               # Experimentos nivel avanzado 🔴
└── scripts/
    └── validate-experiments.ts # Script de validación
```

---

## 🧪 Experimentos Disponibles

Actualmente, la demo incluye:

### 1. Volcán de Bicarbonato (🟢 Básico)
- **Archivo**: `experiments/basic/001-volcan-bicarbonato.json`
- **Nivel de Seguridad**: Verde (Autónomo)
- **Duración**: 35 minutos
- **Edad**: 6-12 años

---

## 🔍 Validar Experimentos

Para validar que los experimentos cumplan con el esquema definido:

```bash
pnpm validate:experiments
```

Este comando:
- ✅ Verifica la estructura JSON
- ✅ Valida todos los campos requeridos
- ✅ Comprueba tipos de datos
- ✅ Verifica reglas de seguridad

---

## 🎨 Páginas Disponibles en la Demo

### 1. Página Principal
**URL**: http://localhost:3000

Características:
- Hero section con llamado a la acción
- Explicación del sistema de seguridad multinivel
- Características principales de la plataforma
- CTA para explorar experimentos

### 2. Lista de Experimentos
**URL**: http://localhost:3000/experiments

Características:
- Grid de tarjetas de experimentos
- Badges de nivel de seguridad
- Información de duración y edad
- Filtrado por categorías (próximamente)

### 3. Detalle de Experimento
**URL**: http://localhost:3000/experiments/volcan-bicarbonato

Características:
- Información completa del experimento
- Lista de materiales con costos
- Instrucciones paso a paso
- Explicación científica
- Advertencias de seguridad

---

## 🐛 Solución de Problemas

### Error: "Cannot find module '@stem-lab/shared'"

**Solución**:
```bash
# Reinstalar dependencias
pnpm install

# Si persiste, limpiar y reinstalar
rm -rf node_modules
rm -rf apps/web/node_modules
rm -rf packages/shared/node_modules
pnpm install
```

### Error: "Port 3000 is already in use"

**Solución**:
```bash
# Opción 1: Usar otro puerto
PORT=3001 pnpm dev

# Opción 2: Matar el proceso en el puerto 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error de TypeScript

Los errores de TypeScript en el editor son normales antes de instalar las dependencias. Después de ejecutar `pnpm install`, deberían desaparecer.

Si persisten:
```bash
# Reiniciar el servidor de TypeScript en VS Code
# Presiona: Ctrl+Shift+P
# Escribe: "TypeScript: Restart TS Server"
```

### Experimentos no se cargan

**Verificar**:
1. El archivo JSON existe en `experiments/basic/001-volcan-bicarbonato.json`
2. El JSON es válido (sin errores de sintaxis)
3. Ejecutar validación: `pnpm validate:experiments`

---

## 📝 Comandos Útiles

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar linter
pnpm lint

# Formatear código
pnpm format

# Validar experimentos
pnpm validate:experiments

# Limpiar node_modules
pnpm clean
```

---

## 🎯 Próximos Pasos

Una vez que la demo esté funcionando, puedes:

1. **Agregar más experimentos**: Usa las plantillas en `experiments/_templates/`
2. **Personalizar estilos**: Modifica `apps/web/tailwind.config.ts`
3. **Implementar Adult Gate**: Componente de seguridad para experimentos 🔴
4. **Agregar Safety Quiz**: Para experimentos 🟡
5. **Configurar base de datos**: PostgreSQL + Prisma para usuarios y tracking

---

## 📚 Documentación Adicional

- [Plan de Arquitectura](ARCHITECTURE_PLAN.md) - Arquitectura técnica completa
- [Resumen de Implementación](IMPLEMENTATION_SUMMARY.md) - Resumen ejecutivo
- [README Principal](README.md) - Información general del proyecto
- [Guía de Experimentos](experiments/README.md) - Cómo contribuir experimentos

---

## 🆘 Soporte

Si encuentras problemas:

1. Revisa esta guía de solución de problemas
2. Verifica los logs en la consola
3. Asegúrate de tener las versiones correctas de Node.js y pnpm
4. Intenta limpiar y reinstalar dependencias

---

## ✅ Checklist de Verificación

Antes de reportar un problema, verifica:

- [ ] Node.js 20+ instalado
- [ ] pnpm 8+ instalado
- [ ] Dependencias instaladas (`pnpm install`)
- [ ] Puerto 3000 disponible
- [ ] Archivo de experimento existe
- [ ] JSON del experimento es válido
- [ ] No hay errores en la consola del navegador

---

**¡Disfruta explorando STEM Home Lab! 🧪🔬🚀**

*Si todo funciona correctamente, deberías ver la página principal con el hero section y poder navegar a la lista de experimentos.*