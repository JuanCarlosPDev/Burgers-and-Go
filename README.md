# 🍔 Burgers & Go | Proyecto React JS | Talento Tech 2025

Este proyecto forma parte de la Pre-Entrega Final del curso de React JS.

Burgers & Go es una aplicación web de hamburguesería desarrollada con React, enfocada en brindar una experiencia moderna e interactiva para visualizar productos, navegar entre diferentes secciones.

## 📋 Descripción del Proyecto

La aplicación simula el funcionamiento de una tienda online de hamburguesas, permitiendo a los usuarios:

- Explorar el catálogo de productos.
- Visualizar el detalle de cada hamburguesa.
- Navegar entre distintas secciones sin recargar la página gracias a React Router DOM.

Toda la información de los productos y de los miembros del equipo se obtienen desde dos archivos locales: **burguers.json** y **staff.json**, consumido mediante **fetch** y **useEffect.**

## 🚀 Características Principales

- 🍔 Catálogo dinámico de hamburguesas.
- 🔍 Vista de detalle individual de productos.
- ⚛️ Componentes reutilizables y estructura organizada.
- 🔗 Navegación SPA con React Router DOM.
- 📱 Diseño responsive adaptable a dispositivos móviles.
- 🎨 Interfaz moderna inspirada en aplicaciones de comida rápida.

## 🛠️ Tecnologías Utilizadas

- **React JS**: Librería principal.
- **Vite**: Entorno de desarrollo rápido.
- **React Router DOM**: Sistema de rutas.
- **CSS Modules**: Estilos modulares y organizados.
- **JavaScript ES6+.**
- **Vercel**: Listo para desplegar en Vercel.

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior recomendada).
- npm

### Pasos de Instalación

1.  Clona el repositorio:

    ```bash
    git clone <url-del-repositorio>
    ```

2.  Ingresar a la carpeta del proyecto:

    ```bash
    cd Burgers-and-Go
    ```

3.  Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4.  Ejecutar el proyecto:

    ```bash
    npm run dev
    ```

    El servidor estará disponible en `http://localhost:5137`

## 📁 Estructura del Proyecto

    ```
    BURGERS-AND-GO/
    │
    ├── public/
    │   ├── data/
    │   ├── icons/
    │   └── images/
    │
    ├── src/
    │   ├── assets/
    │   │
    │   ├── components/
    │   │   ├── AboutUs/
    │   │   ├── Cart/
    │   │   ├── Experience/
    │   │   ├── Hero/
    │   │   ├── Layout/
    │   │   ├── Products/
    │   │   ├── SectionTitle/
    │   │   └── Staff/
    │   │
    │   ├── pages/
    │   │   ├── Carrito.jsx
    │   │   ├── Detalle.jsx
    │   │   ├── Inicio.jsx
    │   │   ├── Menu.jsx
    │   │   └── Nosotros.jsx
    │   │
    │   ├── router/
    │   │   └── routes.jsx
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
    ```
## 📱 Rutas Principales

  Ruta	         Descripción
  /	             Página principal
  /menu	         Catálogo de hamburguesas
  /menu/:id	     Detalle de producto
  /carrito	     Carrito de compras
  /nosotros	     Información de la empresa  

## 🎨 Funcionalidades Destacadas

- Visualización de hamburguesas más vendidas.
- Sistema responsive con menú hamburguesa.
- Sección “Sobre Nosotros”.
- Tarjetas dinámicas generadas desde JSON.
- Renderizado condicional y rutas dinámicas.  

## 👨‍💻 Autor

Proyecto desarrollado por Juan para la Pre-Entrega de React JS.

## 📝 Licencia

    Este proyecto fue realizado con fines educativos.
