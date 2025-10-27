# Manual de Instalación – Proyecto “Pet-Health Services”
1. Introducción
Este manual describe cómo instalar y ejecutar la aplicación web “Pet-Health Services”, desarrollada en React + Vite + Tailwind.
2. Requisitos del sistema
Sistema operativo: Windows 10 / Ubuntu 20.04+
Node.js v18+
Git
Navegador web moderno
3. Preparación del entorno
GitBash
# Instalar Node.js
https://nodejs.org/

# Verificar instalación
Terminal: 
node -v
npm -v
git -v

4. Clonar el repositorio
Shell
git clone https://github.com/usuario/MiAppWeb.git
cd MiAppWeb
5. Instalar dependencias
GitBash
npm install
6. Configuración Crear un archivo .env con el siguiente contenido:
PORT=3000
DB_URL=mongodb://localhost:27017/miapp
7. Ejecutar la aplicación
GitBash
npm start
8. Verificación Abrir el navegador en http://localhost:3000 y verificar que la página de inicio cargue correctamente.
9. Problemas comunes
- Error: “Cannot find module…” → Ejecutar npm install nuevamente.
- Puerto en uso → Cambiar el valor de PORT en .env.
