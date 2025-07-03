package com.winenot.backend.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.winenot.backend.modelo.Producto;
import com.winenot.backend.repositorio.ProductoRepository;
import com.winenot.backend.servicio.ProductoService;
import com.winenot.backend.utils.Validador;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepo;
    private final ProductoService servicio;

    public ProductoController(ProductoService servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Producto> listar() {
        return servicio.listar();
    }

    @PostMapping
    public Producto guardar(@RequestBody Producto p) {
        return servicio.guardar(p);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }

    @GetMapping("/{id}")
    public Producto obtener(@PathVariable Long id) {
        return servicio.buscar(id);
    }

    @PostMapping("/productos")
public ResponseEntity<?> crearProducto(@RequestBody Producto producto) {
    if (!Validador.productoValido(producto)) {
        return ResponseEntity.badRequest().body("Datos inválidos del producto");
    }

    productoRepo.save(producto);
    return ResponseEntity.ok("Producto creado con éxito");
}

    @PutMapping("/productos/{id}/stock")
public ResponseEntity<?> agregarStock(@PathVariable Long id, @RequestBody int cantidad) {
    if (!Validador.esCantidadValida(cantidad)) {
        return ResponseEntity.badRequest().body("Cantidad inválida");
    }

    Producto producto = productoRepo.findById(id).orElse(null);
    if (producto == null) {
        return ResponseEntity.notFound().build();
    }

    producto.setStock(producto.getStock() + cantidad);
    productoRepo.save(producto);
    return ResponseEntity.ok("Stock actualizado");
}
    
}
