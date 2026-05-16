# 🚀 Comandos Rápidos para GitHub

## Opción 1: Copiar y Pegar (Más Fácil)

Abre PowerShell en la carpeta del proyecto y ejecuta estos comandos uno por uno:

```powershell
# 1. Inicializar Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit: BobbyWasi STEM Education Platform"

# 4. Crear repositorio en GitHub (hazlo manualmente en github.com)
# Luego ejecuta estos comandos (REEMPLAZA TU-USUARIO con tu usuario de GitHub):

git remote add origin https://github.com/TU-USUARIO/bobbywasi.git
git branch -M main
git push -u origin main
```

## Opción 2: Script Automático

Crea un archivo `setup-git.ps1` con este contenido:

```powershell
# Setup Git para BobbyWasi
Write-Host "🚀 Configurando Git para BobbyWasi..." -ForegroundColor Cyan

# Inicializar Git
Write-Host "`n📦 Inicializando repositorio Git..." -ForegroundColor Yellow
git init

# Agregar archivos
Write-Host "`n📝 Agregando archivos..." -ForegroundColor Yellow
git add .

# Commit inicial
Write-Host "`n✅ Creando commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit: BobbyWasi STEM Education Platform"

Write-Host "`n✨ ¡Git configurado exitosamente!" -ForegroundColor Green
Write-Host "`n📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Crea un repositorio en GitHub: https://github.com/new" -ForegroundColor White
Write-Host "2. Ejecuta estos comandos (reemplaza TU-USUARIO):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/TU-USUARIO/bobbywasi.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
```

Luego ejecuta:
```powershell
.\setup-git.ps1
```

## 🔄 Para Actualizaciones Futuras

Cada vez que hagas cambios:

```powershell
git add .
git commit -m "Descripción de tus cambios"
git push
```

## 📝 Mensajes de Commit Sugeridos

- `"feat: agregar nuevo experimento de [nombre]"`
- `"fix: corregir error en [componente]"`
- `"style: mejorar diseño de [página]"`
- `"docs: actualizar documentación"`
- `"refactor: reorganizar código de [módulo]"`

## ⚠️ Antes de Subir a GitHub

Verifica que estos archivos NO se suban (ya están en .gitignore):
- ❌ `node_modules/`
- ❌ `.next/`
- ❌ `.env` (si tienes variables de entorno)
- ❌ `.vercel/`

## ✅ Archivos que SÍ se deben subir

- ✅ Todo el código fuente (`apps/`, `packages/`)
- ✅ Experimentos (`experiments/`)
- ✅ Configuración (`package.json`, `tsconfig.json`, etc.)
- ✅ Documentación (`README.md`, `DEPLOYMENT.md`, etc.)

## 🎯 Verificación Rápida

Antes de hacer push, verifica:

```powershell
# Ver qué archivos se van a subir
git status

# Ver el historial de commits
git log --oneline

# Ver las diferencias
git diff
```

## 🆘 Comandos de Emergencia

Si algo sale mal:

```powershell
# Deshacer el último commit (mantiene los cambios)
git reset --soft HEAD~1

# Deshacer cambios en un archivo
git checkout -- nombre-archivo

# Ver el estado actual
git status
```

## 📞 Ayuda

Si tienes problemas:
1. Verifica que Git esté instalado: `git --version`
2. Configura tu usuario: 
   ```powershell
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```
3. Consulta la documentación: https://git-scm.com/doc