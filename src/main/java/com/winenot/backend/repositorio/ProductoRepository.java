package com.winenot.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.winenot.backend.modelo.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    Producto findByNombre(String nombre);
}
