document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/api/productos")
    .then(res => res.json())
    .then(productos => {
      productos.forEach(producto => {
        const card = document.querySelector(`.producto-card[data-id="${producto.id}"]`);
        if (card) {
          const stockSpan = card.querySelector(".stock-cantidad");
          stockSpan.textContent = producto.stock;
          // Guardamos el stock real en un atributo data-stock
          card.setAttribute("data-stock", producto.stock);
        }
      });
    })
    .catch(err => {
      console.error("Error al obtener productos:", err);
    });
});
  