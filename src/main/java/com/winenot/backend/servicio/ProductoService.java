package com.winenot.backend.servicio;

import com.winenot.backend.modelo.Producto;
import com.winenot.backend.repositorio.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    private final ProductoRepository repo;

    public ProductoService(ProductoRepository repo) {
        this.repo = repo;
    }

    public List<Producto> listar() {
        return repo.findAll();
    }

    public Producto guardar(Producto p) {
        return repo.save(p);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }

    public Producto buscar(Long id) {
        return repo.findById(id).orElse(null);
    }
}

