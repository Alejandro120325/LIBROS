# FOLIO — Librería Digital Premium 📚✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

Este proyecto es una plataforma web interactiva y de alto rendimiento diseñada para emular la experiencia de una librería de autor de lujo. El proyecto se centra en ofrecer una interfaz de usuario (UI) inmersiva mediante renderizado 3D nativo en CSS, sistemas de partículas dinámicas y una gestión de estado del lado del cliente optimizada.

## 🚀 Características Principales

* **Renderizado 3D Nativo:** Exhibición de libros en un entorno tridimensional interactivo utilizando `transform-style: preserve-3d` y cálculos de perspectiva en tiempo real basados en la posición del cursor.
* **Motor de Partículas (Canvas API):** Sistema de partículas adaptativo que reacciona al tema visual seleccionado, optimizado para ejecutarse a 60 FPS utilizando `requestAnimationFrame`.
* **Gestión de Estado (LocalStorage):** Implementación completa de un carrito de compras y lista de deseos (Wishlist) persistentes sin necesidad de backend.
* **Búsqueda Dinámica y Filtrado:** Motor de búsqueda en tiempo real e indexación por géneros literarios que actualiza el DOM instantáneamente.
* **Sistema de Temas Múltiples:** Arquitectura de variables CSS que permite cambiar entre esquemas de color en tiempo real (Oscuro Clásico, Ámbar Antiguo, Neón Digital).
* **Interacciones Customizadas:** Cursor personalizado con mezcla de modos (`mix-blend-mode`) y microinteracciones fluidas en toda la interfaz.

## 🛠️ Tecnologías Utilizadas

El proyecto está construido completamente con tecnologías nativas, garantizando máxima velocidad y control absoluto sobre el DOM:

* **HTML5:** Estructura semántica y accesible.
* **CSS3:** Animaciones complejas (`@keyframes`), transiciones fluidas, variables CSS (Custom Properties) para theming y maquetación con CSS Grid / Flexbox.
* **Vanilla JavaScript (ES6+):** Lógica de negocio, manipulación del DOM, gestión de eventos asíncronos y almacenamiento local.

## ⚙️ Instalación y Uso

Al ser un proyecto frontend puro, no requiere dependencias de Node.js ni configuraciones complejas de servidor.

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/folio-libreria.git](https://github.com/TU_USUARIO/folio-libreria.git)

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd folio-libreria

3. **Ejecución:**

Simplemente abre el archivo index.html en cualquier navegador web moderno, o utiliza una extensión como Live Server en tu editor de código para una experiencia de desarrollo óptima.

**📂 Estructura del Proyecto**
```plaintext
folio-libreria/
├── index.html       # Estructura principal, modales y overlays
├── style.css        # Variables de tema, estilos 3D y diseño responsivo
├── script.js        # Lógica de carrito, UI dinámica y motor de partículas
└── README.md        # Documentación del proyecto
```
**💡 Detalles Técnicos Destacados**

Optimización de Animaciones: Las animaciones críticas utilizan propiedades aceleradas por hardware (transform y opacity) junto con will-change para evitar repintados innecesarios del navegador.
Prevención de Conflictos de Eventos: Se separó la lógica de rotación 3D del contenedor padre (.book-card) de la animación de reverso (.book-card-inner) para evitar bloqueos de la interfaz y mantener los botones interactivos.

**👨‍💻 Autor**

**Jairo Alejandro Ojeda Herrera** - Estudiante de Ingeniería en Computación

Universidad Politécnica Salesiana (UPS) - 2026
