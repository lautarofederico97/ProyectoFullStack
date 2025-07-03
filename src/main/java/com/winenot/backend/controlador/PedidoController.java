package com.winenot.backend.controlador;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.winenot.backend.modelo.Producto;
import com.winenot.backend.repositorio.ProductoRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PedidoController {

    @Autowired
    private ProductoRepository productoRepo;

    @PostMapping("/pedidos")
    public ResponseEntity<?> procesarPedido(@RequestBody List<ProductoRequest> carrito) {
        for (ProductoRequest item : carrito) {
            Producto producto = productoRepo.findByNombre(item.getNombre());
            if (producto == null) {
                return ResponseEntity.badRequest().body("Producto no encontrado: " + item.getNombre());
            }

            if (producto.getStock() < item.getCantidad()) {
                return ResponseEntity.badRequest().body("Stock insuficiente para: " + item.getNombre());
            }

            producto.setStock(producto.getStock() - item.getCantidad());
            productoRepo.save(producto);
        }

        return ResponseEntity.ok("Pedido procesado");
    }

    // Clase auxiliar para recibir datos del carrito
    public static class ProductoRequest {
        private String nombre;
        private int cantidad;

        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }

        public int getCantidad() { return cantidad; }
        public void setCantidad(int cantidad) { this.cantidad = cantidad; }
    }
}

