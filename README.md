# 🚀 Startup React - Guía Práctica de Componentes y Rutas

Aplicación web desarrollada con **React** y **Vite** para demostrar el uso de componentes reutilizables, gestión de estado local, ciclo de vida, navegación por rutas y consumo de APIs REST.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** React + Vite
* **Lenguaje:** JavaScript (ES6+)
* **Enrutamiento:** React Router DOM v6
* **Estilos:** Styled Components & Inline CSS
* **Peticiones HTTP:** Fetch API (JSONPlaceholder)

---

## 📋 Características y Ejercicios Implementados

El proyecto reúne una serie de componentes funcionales e interactivos estructurados dentro de una arquitectura SPA (*Single Page Application*):

1. **Navegación Dinámica (React Router):**
   * Configuración de rutas (`/`, `/about`, `/contact`).
   * Manejo de rutas dinámicas mediante `useParams` (`/profile/:username`).
   * Gestión de ruta no encontrada (Error 404) con componente `NotFound`.
2. **Gestión de Estado (`useState`):**
   * Contador funcional interactivo con botones de incremento/decremento.
   * Contador basado en clases de React (*OldCounter*).
3. **Ciclo de Vida y Efectos (`useEffect`):**
   * Componente `Clock` que actualiza la hora local en tiempo real cada segundo.
   * Consumo asíncrono de la API pública JSONPlaceholder para renderizar publicaciones.
4. **Renderizado Condicional e Iterativo:**
   * Mapeo dinámico de arreglos con `.map()` para renderizado de listas (`ItemList`).
   * Componente de bienvenida (`Greeting`) con mensajes condicionales según el estado del usuario.
5. **Estilos Encapsulados (Styled Components):**
   * Botón estilizado con animaciones en `:hover` y `:active`.

---

## 📁 Estructura del Proyecto

```text
startup-react/
├── node_modules/
├── public/
├── src/
│   ├── components/       # Componentes de laboratorio y UI reutilizables
│   │   ├── ApiPosts.jsx
│   │   ├── Button.jsx
│   │   ├── Clock.jsx
│   │   ├── Counter.jsx
│   │   ├── Greeting.jsx
│   │   ├── ItemList.jsx
│   │   ├── OldCounter.jsx
│   │   └── pages/        # Vistas y componentes de páginas
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Home.jsx
│   │       ├── NotFound.jsx
│   │       └── Profile.jsx
│   ├── App.jsx           # Contenedor principal con rutas y maquetación
│   ├── main.jsx          # Punto de entrada de React en el DOM
│   └── index.css
├── index.html
├── package.json
└── vite.config.js