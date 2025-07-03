# Tienda de Vinos

## Descripción

La **Tienda de Vinos** es una página web de e-commerce diseñada para ofrecer una selección de vinos. Este proyecto se centra en proporcionar una interfaz fácil de usar, donde los usuarios pueden explorar diferentes tipos de vinos, leer descripciones y contactar a la tienda para más información. Está construida con **HTML**, **CSS** y utiliza **Bootstrap** para mejorar la experiencia visual y funcionalidad.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos:

- **`index.html`**: Este es el archivo principal que contiene la estructura de la página web. Incluye secciones para productos, un formulario de contacto y un pie de página.
- **`carrito.html`**: Este archivo contiene la estructura del carrito de compras. Permite a los usuarios ver los productos añadidos, la cantidad, el total y la opción de limpiar el carrito o finalizar la compra.
- **`productos.html`**: se separo la seccion de carga de productos para una mayor facilidad a la hroa de modfiicar los productos y de esta manera no se debe modificar el archivo principal.
- **`styles.css`**: Este archivo contiene todos los estilos CSS que dan formato y diseño a la página, mejorando la experiencia visual del usuario.
- **`carrito.js`**: Este archivo contiene toda la logica e interaccion de la pagina.
### Contenido del archivo `index.html`

- **Header**: 
  - Contiene el título de la tienda (**"WINE-NOT"**) y el menú de navegación.
  - El menú de navegación se centró utilizando **Bootstrap** y se ajustó para ser completamente responsivo, adaptándose a pantallas de diferentes tamaños.
  
- **Main**:
  - **Sección de Productos**: 
    - Muestra una lista de productos (vinos) disponibles. Cada producto incluye una imagen, nombre, descripción, precio y un botón para añadir al carrito.
    - Se utilizó el sistema de rejilla de **Bootstrap** para asegurar una disposición flexible y responsiva de los productos.
  
  - **Sección de Contacto**: 
    - Un formulario de contacto que permite a los usuarios enviar consultas directamente a la tienda.
    - Utiliza los componentes de formulario de **Bootstrap** para una interfaz limpia y organizada.

- **Footer**: 
  - Incluye información sobre derechos de autor y puede incluir enlaces adicionales o información relevante.

### Contenido del archivo `carrito.html`

- **Header**:
  - Contiene el título "Carrito de Compras" y un menú de navegación básico con enlaces a las secciones de **Inicio**, **Carrito** y **Contacto**.

- **Main**:
  - **Sección de Productos en el Carrito**:
    - Muestra los productos añadidos al carrito en una tabla. Cada fila de la tabla contiene:
      - **Producto**: Nombre del vino.
      - **Precio**: Precio unitario del vino.
      - **Cantidad**: Cantidad de unidades del vino en el carrito.
      - **Total**: Precio total del vino en el carrito (Precio * Cantidad).
    - Los productos se agregan dinámicamente usando JavaScript (contenido generado a partir de datos almacenados en el carrito).
  
  - **Total**:
    - Muestra el precio total de todos los productos en el carrito.

  - **Botones**:
    - Un botón para **limpiar el carrito**, eliminando todos los productos del mismo.
    - Un botón para **finalizar la compra**, que puede redirigir a una página de pago o mostrar un mensaje de confirmación (funcionalidad pendiente de implementación).

- **Footer**:
  - Contiene un texto de derechos de autor de la tienda.

- **Enlaces de JavaScript**:
  - El archivo `carrito.js` se encarga de manejar la funcionalidad del carrito, como agregar productos, calcular el total y limpiar el carrito.

### Contenido del archivo `styles.css`

- **Estilos Globales**:
  - Define tipografía, colores y márgenes generales de la página.
  
- **Estilización de Header**:
  - Se utilizó un fondo degradado con tonos morados (`#4d204e` y `#d28dd2`) para dar un aspecto elegante.
  - El título del header está centrado, con una fuente estilizada (`'Playfair Display'`).
  
- **Estilización del Navbar**:
  - Se implementó **Bootstrap** para crear un navbar responsivo y estéticamente agradable.
  - Los items del menú de navegación se centran horizontalmente en la barra superior, asegurando que el logo y los enlaces sean fácilmente visibles y accesibles.
  - El fondo del navbar se ajusta para que coincida con el fondo del header, manteniendo la coherencia visual de la página.

- **Estilización del Carrusel**:
  - Se añadió un carrusel de imágenes con **Bootstrap**, y se ajustó el tamaño de las imágenes para que se adapten automáticamente a la altura del carrusel, manteniendo su aspecto correcto incluso cuando el tamaño de la imagen varíe.
  
- **Sección de Productos**:
  - Los productos se presentan en una rejilla responsiva utilizando el sistema de **Bootstrap Grid**. Esto asegura que la disposición de los productos sea ordenada y se ajuste correctamente a diferentes tamaños de pantalla.
  - Se añadió un margen entre los productos para darles espacio y evitar que se vean sobrecargados.

- **Formularios de Contacto**:
  - Se utilizó **Bootstrap** para estilizar el formulario de contacto, asegurando que todos los campos sean fácilmente accesibles y que la página se vea limpia y profesional.

- **Estilos para la Página Móvil**:
  - Se añadieron reglas **@media queries** para ajustar la visualización en dispositivos pequeños, como teléfonos móviles y tabletas.
  - El tamaño de los enlaces en el menú de navegación se ajusta en pantallas pequeñas, y el margen entre los productos se reduce.

## Funcionalidades

- **Visualización de Productos**: Los usuarios pueden ver una lista de vinos con imágenes y detalles relevantes, incluyendo el nombre, descripción, precio y la opción de añadir al carrito.
- **Formulario de Contacto**: Permite a los visitantes enviar consultas directamente a la tienda.
- **Carrusel de Imágenes**: Se añadió un carrusel de imágenes en la página principal que se adapta automáticamente a las diferentes resoluciones de pantalla.
- **Diseño Responsivo**: La página se adapta a diferentes dispositivos y tamaños de pantalla, ofreciendo una experiencia óptima tanto en móviles como en desktop.
- **Navbar Centrado**: Los elementos del menú en el navbar están centrados y se ajustan de manera fluida a dispositivos pequeños gracias a **Bootstrap**.

### Funcionalidades del Carrito de Compras

- **Visualización del Carrito**: El carrito muestra los productos añadidos en una tabla con los siguientes detalles:
  - Producto, Precio, Cantidad y Total.
  
- **Cálculo del Total**: El total de la compra se calcula dinámicamente y se muestra en la interfaz.
  
- **Botones de Interacción**:
  - **Limpiar Carrito**: Permite eliminar todos los productos del carrito con un solo clic.
  - **Finalizar Compra**: Aunque aún no está completamente implementada, esta opción permitiría proceder a una página de pago o mostrar un mensaje de confirmación.


## Modificaciones y Mejoras Realizadas

- **Navbar**:
  - Implementación de **Bootstrap** para el menú de navegación, con los items centrados en la barra superior.
  - Se ajustó el fondo del navbar para coincidir con el fondo del header, creando una apariencia coherente.

- **Sección de Productos**:
  - Uso del sistema de rejilla de **Bootstrap** para disponer los productos de manera ordenada y adaptativa.
  - Cada producto ahora está contenido en un contenedor con un tamaño flexible que se ajusta a diferentes tamaños de pantalla.

- **Estilización de la Página**:
  - Se implementaron reglas CSS personalizadas para asegurar una apariencia elegante y coherente, como el fondo degradado del header y navbar.
  - Se ajustaron las imágenes y los botones para que sean completamente responsivos, utilizando técnicas como `max-height` y `object-fit` para el carrusel de imágenes.

- **Funcionalidad del Carrito de Compras**:
  - Se creó la estructura del carrito de compras en `carrito.html`, que permite visualizar los productos añadidos, el precio total y la cantidad.
  - Se implementaron funciones básicas de JavaScript para gestionar el carrito, como añadir productos, calcular el total y limpiar el carrito.


¡Gracias por usar la Tienda de Vinos!
