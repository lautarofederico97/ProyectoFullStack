package com.winenot.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.winenot.backend.modelo.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
