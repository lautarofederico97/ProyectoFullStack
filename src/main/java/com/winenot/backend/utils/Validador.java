package com.winenot.backend.utils;

import com.winenot.backend.modelo.Producto;

public class Validador {

    public static boolean esTextoValido(String texto) {
        return texto != null && !texto.trim().isEmpty();
    }

    public static boolean esPrecioValido(double precio) {
        return precio > 0;
    }

    public static boolean esCantidadValida(int cantidad) {
        return cantidad >= 0;
    }

    public static boolean productoValido(Producto producto) {
        return producto != null &&
               esTextoValido(producto.getNombre()) &&
               esTextoValido(producto.getImagen()) &&
               esPrecioValido(producto.getPrecio()) &&
               esCantidadValida(producto.getStock());
    }
}
