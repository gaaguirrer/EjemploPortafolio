# Portafolio Profesional

Portafolio web estatico construido con **React + Vite + Tailwind CSS**, disenado para ser rapido, responsive y facil de personalizar. Desplegado en **Netlify**.

---

## Tabla de contenidos

1. [Inicio rapido](#inicio-rapido)
2. [Instalacion](#instalacion)
3. [Como ejecutar en desarrollo](#como-ejecutar-en-desarrollo)
4. [Build para produccion](#build-para-produccion)
5. [Como personalizar tu portafolio](#como-personalizar-tu-portafolio)
6. [Desplegar en Netlify](#desplegar-en-netlify)
7. [Estructura del proyecto](#estructura-del-proyecto)

---

## Inicio rapido

```bash
npm install
npm run dev
```

---

## Instalacion

### Requisitos

- **Node.js** v18 o superior ([descargar aqui](https://nodejs.org/))
- **npm** (viene con Node.js) o **pnpm** / **yarn**

### Pasos

1. Clona el repositorio:

```bash
git clone https://github.com/gaaguirrer/EjemploPortafolio
cd Portafolio
```

2. Instala las dependencias:

```bash
npm install
```

---

## Como ejecutar en desarrollo

Inicia el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

---

## Build para produccion

Genera los archivos estaticos optimizados en la carpeta `dist/`:

```bash
npm run build
```

Para previsualizar el build localmente:

```bash
npm run preview
```

---

## Como personalizar tu portafolio

Todo el contenido editable esta en la carpeta `src/data/`. Los componentes React **no necesitan modificarse** para cambiar textos, imagenes, links o colores.

### Archivos JSON de datos

| Archivo | Que modifica |
|---|---|
| `src/data/profile.json` | Tu nombre, titulo profesional, tagline, foto, seccion "Sobre mi" (experiencia, intereses, objetivos) |
| `src/data/nav.json` | Links de la barra de navegacion |
| `src/data/stats.json` | Los numeros de estadisticas (anos de experiencia, proyectos, etc.) |
| `src/data/skills.json` | Tecnologias (Frontend, Backend, Infraestructura) y habilidades blandas |
| `src/data/projects.json` | Tus proyectos: nombre, descripcion, tecnologias usadas, imagen, link a GitHub, link a demo en vivo |
| `src/data/contact.json` | Seccion CTA (llamada a la accion), email, links del footer (GitHub, LinkedIn, Twitter) |

### Ejemplo: Agregar un proyecto nuevo

Edita `src/data/projects.json` y agrega un objeto al arreglo `"items"`:

```json
{
  "title": "Mi Nuevo Proyecto",
  "description": "Descripcion breve de lo que hace.",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "https://mi-imagen.com/screenshot.png",
  "github": "https://github.com/usuario/proyecto",
  "demo": "https://mi-proyecto.vercel.app",
  "size": "large"
}
```

- `"size"`: usa `"large"` para cards anchas o `"small"` para cards estrechas
- `"github"`: link al repositorio en GitHub
- `"demo"`: link a la demo en vivo (Netlify, Vercel, etc.)
- `"image"`: puede ser una URL externa o una ruta local como `/images/mi-proyecto.png`

### Cambiar tu foto de perfil

1. Coloca tu foto en `public/images/profile.jpg`
2. En `src/data/profile.json`, actualiza el campo `"profileImage"` si usas otro nombre

### Cambiar colores

Los colores estan definidos en `src/index.css` dentro del bloque `@theme`. Ejemplo:

```css
@theme {
  --color-primary: #73ffe3;
  --color-secondary: #1cede1;
  --color-tertiary: #64d0ff;
  --color-surface: #0e0e0e;
  --color-on-surface: #ffffff;
}
```

Cambia los valores hexadecimales y se aplicaran en todo el sitio.

### Cambiar fuentes

Las fuentes se cargan desde Google Fonts en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
```

Y se configuran en `src/index.css`:

```css
--font-headline: "Space Grotesk", sans-serif;
--font-body: "Inter", sans-serif;
```

### Cambiar el nombre de marca (navbar/footer)

- **Navbar**: edita en `src/components/Navbar.jsx` el texto `ARCHITECT.IO`
- **Footer**: edita `"brand"` en `src/data/contact.json`

### Cambiar links sociales

Edita `src/data/contact.json` en la seccion `"footer.links"`:

```json
"links": [
  { "label": "GitHub", "href": "https://github.com/tu-usuario" },
  { "label": "LinkedIn", "href": "https://linkedin.com/in/tu-usuario" },
  { "label": "Twitter", "href": "https://twitter.com/tu-usuario" },
  { "label": "Email", "href": "mailto:tu@email.com" }
]
```

---

## Desplegar en Netlify

### Opcion 1: Conectar repositorio de GitHub (recomendado)

1. Sube tu codigo a GitHub:

```bash
git remote add origin https://github.com/tu-usuario/tu-repo.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Ve a [Netlify](https://app.netlify.com/) y haz click en **"Add new site" > "Import an existing project"**
3. Selecciona tu repositorio de GitHub
4. Configura los ajustes de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Haz click en **Deploy site**

Cada vez que hagas `git push`, Netlify reconstruira y publicara automaticamente.

### Opcion 2: Drag & Drop

1. Ejuta `npm run build`
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist/` al area indicada

### Dominio personalizado

- **Gratis:** `tu-nombre.netlify.app`
- **Custom domain:** En Netlify ve a **Domain settings > Add custom domain** y configura tu dominio propio.

---

## Estructura del proyecto

```
Portafolio/
├── index.html              ← HTML base, meta tags, Google Fonts
├── vite.config.js          ← Configuracion de Vite
├── netlify.toml            ← Configuracion de Netlify
├── package.json            ← Dependencias y scripts
├── public/
│   ├── favicon.svg         ← Icono del navegador
│   └── images/
│       └── profile.jpg     ← Tu foto de perfil
├── src/
│   ├── main.jsx            ← Punto de entrada de React
│   ├── App.jsx             ← Componente principal (ensambla secciones)
│   ├── index.css           ← Tailwind + colores custom + fuentes + animaciones
│   ├── components/
│   │   ├── Navbar.jsx      ← Barra de navegacion sticky
│   │   ├── Hero.jsx        ← Portada principal + estadisticas
│   │   ├── About.jsx       ← Seccion "Sobre mi"
│   │   ├── Skills.jsx      ← Tecnologias + habilidades blandas
│   │   ├── Projects.jsx    ← Grid de proyectos (bento grid)
│   │   ├── Contact.jsx     ← CTA / llamada a la accion
│   │   └── Footer.jsx      ← Pie de pagina
│   ├── data/               ← AQUI EDITAS TU CONTENIDO
│   │   ├── profile.json
│   │   ├── nav.json
│   │   ├── stats.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   └── contact.json
│   └── hooks/
│       └── useFadeIn.js    ← Hook para animaciones al hacer scroll
└── dist/                   ← Build generado (no editar manualmente)
```

---

## Tecnologias utilizadas

- **React 19** - Biblioteca UI
- **Vite 8** - Build tool y dev server
- **Tailwind CSS 4** - Framework de estilos utility-first
- **Material Symbols** - Iconos de Google Fonts
- **Space Grotesk + Inter** - Tipografia
- **Netlify** - Hosting y deploy automatico

---

## Scripts disponibles

| Comando | Descripcion |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de produccion |
| `npm run preview` | Previsualiza build localmente |
