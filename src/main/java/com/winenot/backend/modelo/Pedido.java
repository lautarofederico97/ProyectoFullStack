package com.winenot.backend.modelo;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;



@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double total;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ItemPedido> items = new ArrayList<>();

    public Pedido() {}

    public void agregarProducto(Producto producto, int cantidad) {
        if (producto.getStock() < cantidad) {
            throw new IllegalArgumentException("Stock insuficiente para el producto: " + producto.getNombre());
        }

        ItemPedido item = new ItemPedido(producto, cantidad);
        items.add(item);
        total += producto.getPrecio() * cantidad;
        producto.setStock(producto.getStock() - cantidad);
    }

    public Long getId() { return id; }

    public double getTotal() { return total; }

    public List<ItemPedido> getItems() { return items; }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("🧾 Pedido:\n");
        for (ItemPedido item : items) {
            sb.append("- ").append(item.getProducto().getNombre())
              .append(" x").append(item.getCantidad())
              .append(" @ $").append(item.getProducto().getPrecio())
              .append(" = $").append(item.getSubtotal())
              .append("\n");
        }
        return sb.toString();
    }
}
