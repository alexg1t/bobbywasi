# 🚀 Guía de Deployment - BobbyWasi

## 📋 Requisitos Previos

- Cuenta de GitHub
- Cuenta de Vercel (puedes usar tu cuenta de GitHub)
- Git instalado en tu computadora

## 🔧 Paso 1: Preparar el Proyecto Localmente

### 1.1 Inicializar Git (si no está inicializado)

```bash
cd c:/Users/aovks/OneDrive/Escritorio/IBMBOB
git init
```

### 1.2 Agregar todos los archivos

```bash
git add .
```

### 1.3 Hacer el primer commit

```bash
git commit -m "Initial commit: BobbyWasi STEM Education Platform"
```

## 📤 Paso 2: Subir a GitHub

### 2.1 Crear un nuevo repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura el repositorio:
   - **Repository name**: `bobbywasi` (o el nombre que prefieras)
   - **Description**: "Plataforma educativa STEM para niños - BobbyWasi"
   - **Visibility**: Public o Private (tu elección)
   - **NO** marques "Initialize this repository with a README" (ya tenemos uno)
5. Haz clic en **"Create repository"**

### 2.2 Conectar tu repositorio local con GitHub

Copia los comandos que GitHub te muestra (algo como esto, pero con tu usuario):

```bash
git remote add origin https://github.com/TU-USUARIO/bobbywasi.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.**

### 2.3 Verificar que se subió correctamente

Recarga la página de tu repositorio en GitHub y deberías ver todos los archivos.

## 🌐 Paso 3: Deploy en Vercel

### 3.1 Opción A: Deploy desde Vercel Dashboard (Recomendado)

1. Ve a [Vercel](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New..."** → **"Project"**
4. Selecciona tu repositorio `bobbywasi` de la lista
5. Configura el proyecto:

   **Framework Preset**: Next.js
   
   **Root Directory**: `apps/web`
   
   **Build Command**: 
   ```bash
   cd ../.. && pnpm install && pnpm build --filter=web
   ```
   
   **Output Directory**: `.next`
   
   **Install Command**:
   ```bash
   pnpm install
   ```

6. Haz clic en **"Deploy"**

### 3.2 Opción B: Deploy desde la línea de comandos

```bash
# Instalar Vercel CLI
npm i -g vercel

# Hacer login
vercel login

# Deploy
cd apps/web
vercel
```

Sigue las instrucciones en pantalla.

## ⚙️ Paso 4: Configuración Adicional en Vercel

### 4.1 Variables de Entorno (si las necesitas en el futuro)

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

### 4.2 Configurar el dominio (opcional)

1. Ve a Settings → Domains
2. Agrega tu dominio personalizado si tienes uno

## 🔄 Paso 5: Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Agregar cambios
git add .

# 2. Hacer commit
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push

# Vercel detectará automáticamente los cambios y hará un nuevo deploy
```

## 📝 Configuración Especial para Monorepo

Vercel necesita saber que este es un monorepo. Asegúrate de que en la configuración del proyecto:

### vercel.json (ya incluido en apps/web/)

```json
{
  "buildCommand": "cd ../.. && pnpm install && pnpm build --filter=web",
  "devCommand": "cd ../.. && pnpm dev --filter=web",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## 🐛 Solución de Problemas Comunes

### Error: "Module not found"

**Solución**: Asegúrate de que el Root Directory esté configurado como `apps/web`

### Error: "Build failed"

**Solución**: Verifica que el Build Command incluya la instalación de dependencias:
```bash
cd ../.. && pnpm install && pnpm build --filter=web
```

### Error: "Cannot find experiments directory"

**Solución**: Los experimentos están en la raíz del proyecto. Vercel debería poder acceder a ellos desde `../../experiments`

## ✅ Verificación del Deploy

Una vez que el deploy esté completo:

1. Vercel te dará una URL (algo como `bobbywasi.vercel.app`)
2. Visita la URL
3. Verifica que:
   - ✅ La página principal carga correctamente
   - ✅ Los experimentos se muestran en la lista
   - ✅ Puedes ver los detalles de cada experimento
   - ✅ Los tabs funcionan correctamente
   - ✅ Las imágenes y estilos se cargan

## 🎉 ¡Listo!

Tu plataforma BobbyWasi ahora está en línea y accesible desde cualquier lugar del mundo.

### URLs Importantes:

- **Producción**: `https://tu-proyecto.vercel.app`
- **GitHub**: `https://github.com/TU-USUARIO/bobbywasi`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

## 📊 Monitoreo

Vercel proporciona:
- 📈 Analytics de tráfico
- 🐛 Logs de errores
- ⚡ Métricas de rendimiento
- 🔄 Historial de deployments

Accede a todo esto desde el dashboard de Vercel.

---

**¿Necesitas ayuda?**
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de pnpm](https://pnpm.io)