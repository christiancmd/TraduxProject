# 🚀 Tradux

![status](https://img.shields.io/badge/status-alpha-yellow) ![license](https://img.shields.io/badge/license-MIT-blue)

Tradux es una aplicación web ligera para traducciones rápidas usando un servicio de IA en la nube. Está diseñada para comprobar significados y generar traducciones de frases o párrafos cortos de forma ágil y práctica.

## 📌 Tabla de contenidos

- [Cómo funciona](#cómo-funciona)
- [Criterios y limitaciones de uso](#criterios-y-limitaciones-de-uso)
- [Instalación](#instalación-clonar-y-ejecutar)
- [Ejemplo de .env](#ejemplo-de-env)
- [Comandos útiles](#comandos-útiles)
- [Tecnologías usadas](#tecnologías-usadas)
- [Contribuir](#contribuir)
- [Seguridad y privacidad](#seguridad-y-privacidad)

---

## 💡 Cómo funciona

- La app envía el texto al servicio de IA seleccionado y muestra la traducción recibida.
- Pensada para usos rápidos: frases, párrafos cortos y comprobaciones puntuales.
- La UI es responsiva y minimalista para ayudar a flujos rápidos de trabajo.

## ⚖️ Criterios y limitaciones de uso

- **Requisito de conexión:** Tradux necesita conexión a Internet para funcionar; sin conexión no se pueden realizar traducciones.
- **Límite diario:** Hay un límite de **6** traducciones por día para el uso general del servicio.
- **Nota sobre calidad:** Las traducciones las genera un servicio de IA — suelen ser útiles, pero conviene revisarlas antes de usarlas en contextos críticos.

> Tip: Si necesitas traducir mucho contenido, agrupa los textos y prioriza los más importantes para optimizar el uso del límite diario.

## 📥 Instalación (clonar y ejecutar)

Sigue estos pasos para ejecutar Tradux localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/christiancmd/TraduxProject.git
cd TraduxProject
```

2. Instala dependencias:

```bash
npm install
```

3. Configura tu API key (ver sección siguiente).

4. Ejecuta en modo desarrollo:

```bash
npm run dev
```

5. Abre `http://localhost:5173` en tu navegador.

## 🔐 Ejemplo de `.env`

En la raíz del proyecto crea un archivo `.env` o `.env.local` con tu clave privada (no subir a repositorios públicos):

```env
# Ejemplo: VITE_API_KEY=sk-xxxxx
VITE_API_KEY=tu_api_key_aqui
```

Nota: Tradux no incluye ninguna API key por defecto. Debes obtener la tuya desde el proveedor de IA que prefieras (por ejemplo OpenAI, Google Cloud, etc.) y colocarla en el `.env`.

## 🛠️ Comandos útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Formatear (Prettier) y corregir estilo (ESLint)
npx prettier --write .
npm run lint -- --fix
```

Si no tienes scripts para `lint` o `build` en `package.json`, añade los que necesites.

## 🧰 Tecnologías usadas

| Parte | Tecnologías |
|---|---|
| Frontend | React + TypeScript + Vite |
| Estilos | Tailwind CSS |
| Herramientas | Node.js, npm, ESLint, Prettier |
| IA | Servicio externo (API key necesaria) |

## 🤝 Contribuir

- Haz un fork y crea una rama con tu feature: `git checkout -b feat/nombre`
- Asegúrate de ejecutar linters y formateadores antes de abrir PR.
- Añade descripciones claras y pasos para reproducir en la PR.

## 🔒 Seguridad y privacidad

- La aplicación envía texto al proveedor de IA seleccionado; revisa su política de privacidad.
- No subas tus claves en repositorios públicos. Añade `.env` al `.gitignore`.

---

Si quieres, puedo:

- añadir un `README` con ejemplo visual (capturas de pantalla),
- crear un archivo `.env.example`,
- añadir Badges adicionales (build, coverage, deploy),
- o generar un pequeño `CONTRIBUTING.md`.
