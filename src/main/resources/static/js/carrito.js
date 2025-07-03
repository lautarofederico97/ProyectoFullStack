let carrito = [];
// Inicializamos el contador del carrito
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;


//cargar productos en la pagina principal
/*Cargar los productos dinámicamente desde el archivo productos.html */
fetch('/pages/productos.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('productos-container').innerHTML = data;
        })
    .catch(error => {
            console.error('Error cargando los productos:', error);
        })
        ; 

//Validar Stock
    function agregarAlCarritoConStock(boton) {
            const card = boton.closest('.producto-card');
            const id = card.getAttribute('data-id');
            const nombre = card.getAttribute('data-nombre');
            const precio = parseFloat(card.getAttribute('data-precio'));
            let stock = parseInt(card.getAttribute('data-stock'));
        
            const index = carrito.findIndex(item => item.nombre === nombre);
            const cantidadEnCarrito = index > -1 ? carrito[index].cantidad : 0;
        
            if (cantidadEnCarrito < stock) {
                agregarAlCarrito(nombre, precio);
            } else {
                alert("No hay suficiente stock para este producto");
            }
        }

 // Función para actualizar el contador en el navbar
 function actualizarContadorCarrito() {
    cartCount = carrito.reduce((total, item) => total + item.cantidad, 0);  // Recalcular el total de productos en el carrito
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) {
        cartCountSpan.textContent = cartCount; // Mostrar el contador actualizado
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: 1
    }
    cartCount++;

    // Actualizamos el contador en el navbar
    document.getElementById("cart-count").textContent = cartCount;

    // Mostrar el popup de notificación
    const popupNotification = document.getElementById("popup-notification");
    popupNotification.classList.add("show");

    // Ocultamos el popup después de 2 segundos
    setTimeout(function() {
        popupNotification.classList.remove("show");
    }, 1000);
    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index > -1) {
        carrito[index].cantidad += 1; // Incrementar cantidad si ya existe
    } else {
        carrito.push(producto); // Agregar nuevo producto
    }

    actualizarCarrito();
    guardarCarrito(); // Guardar en localStorage
    actualizarContadorCarrito(); // Actualizar el contador
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');

    if (!carritoItems || !totalElement) {
        console.error("Elementos del carrito no encontrados");
        return; // Sal de la función si los elementos no existen
    }

    carritoItems.innerHTML = ''; // Limpiar la tabla antes de actualizar
    let total = 0;

    carrito.forEach((item, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.precio}$</td>
            <td>${item.cantidad}</td>
            <td>${(item.precio * item.cantidad).toFixed(2)}$</td>
            <td>
                <button onclick="incrementarCantidad(${index})">+</button>
                <button onclick="decrementarCantidad(${index})">-</button>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;
        carritoItems.appendChild(fila);
        total += item.precio * item.cantidad;
    });

    totalElement.textContent = total.toFixed(2);
    actualizarContadorCarrito(); // Actualizar el contador en el navbar
}

// Función para incrementar la cantidad de un producto en el carrito
function incrementarCantidad(index) {
    carrito[index].cantidad++; // Incrementa la cantidad del producto
    actualizarCarrito(); // Actualiza el carrito
    guardarCarrito(); // Guarda el carrito actualizado en el localStorage
    actualizarContadorCarrito(); // Actualizar el contador

}

// Función para decrementar la cantidad de un producto en el carrito
function decrementarCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--; // Decrementa la cantidad si es mayor que 1
    } else {
        eliminarProducto(index); // Si la cantidad es 1, eliminamos el producto
    }
    actualizarCarrito(); // Actualiza el carrito
    guardarCarrito(); // Guarda el carrito actualizado en el localStorage
    actualizarContadorCarrito(); // Actualizar el contador

}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1); // Elimina el producto del carrito
    actualizarCarrito(); // Actualiza el carrito
    guardarCarrito(); // Guarda el carrito actualizado en el localStorage
    localStorage.removeItem('cart-count'); // Limpiar el contador del carrito

}


// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem ('cart-count', cartCount);
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    const contador = JSON.parse(localStorage.getItem('cart-count'));
    if (carritoGuardado) {
        carrito = carritoGuardado;
        cartCount = contador;
        actualizarCarrito();
        actualizarContadorCarrito(); // Actualizar el contador

    }
}

// Función para limpiar el carrito
function limpiarCarrito() {
    carrito = []; // Vaciar el carrito
    localStorage.removeItem('carrito'); // Limpiar el carrito de localStorage
    localStorage.removeItem('cart-count'); // Limpiar el contador del carrito
    actualizarCarrito(); // Actualiza la vista del carrito
    actualizarContadorCarrito(); // Actualizar el contador

}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito(); // Llama a cargarCarrito cuando el DOM esté listo
});



// Al cargar la página, actualizar el contador en el navbar
window.onload = function() {
    actualizarContadorCarrito(); // Asegura que el contador se actualice en el navbar
};


// Función para expandir o colapsar la tarjeta
function expandirTarjeta(elemento) {
    // Evitar que el clic en el botón "Agregar al Carrito" expanda la tarjeta
    if (event.target.tagName === 'BUTTON') {
        return;
    }

    // Si la tarjeta ya está expandida, la contraemos
    if (elemento.classList.contains('expandida')) {
        elemento.classList.remove('expandida');
    } else {
        // Si no está expandida, la expandimos
        elemento.classList.add('expandida');
    }


    //funcionalidad del boton "finalizar compra"
    document.getElementById("finalizar-compra").addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
    
        fetch("http://localhost:8080/api/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carrito)
        })
        .then(response => {
            if (response.ok) {
                alert("Compra realizada con éxito");
                limpiarCarrito(); // Limpiar el carrito después de la compra
                location.reload(); // Recargar para actualizar los stocks
            } else {
                return response.text().then(msg => { throw new Error(msg) });
            }
        })
        .catch(error => {
            console.error("Error al finalizar compra:", error);
            alert("Error al finalizar compra: " + error.message);
        });
    });
}