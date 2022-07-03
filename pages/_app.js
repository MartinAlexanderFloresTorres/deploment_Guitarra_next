import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/normalize.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const carritoStorage =
      JSON.parse(localStorage.getItem("carrito-next-v1")) || [];
    setCarrito(carritoStorage);
  }, []);

  useEffect(() => {
    // bug
    if (carrito.length > 0) {
      localStorage.setItem("carrito-next-v1", JSON.stringify(carrito));
    }
  }, [carrito]);

  // Agregar al carrito
  const agregarCarrito = (producto) => {
    if (carrito.some((articulo) => articulo.id == producto.id)) {
      const CarritoActualizados = carrito.map((productoState) => {
        if (productoState.id == producto.id) {
          productoState.cantidad = producto.cantidad;
          return productoState;
        }
        return productoState;
      });
      setCarrito([...CarritoActualizados]);
    } else {
      setCarrito([...carrito, producto]);
    }
    router.push("/tienda");
  };

  // Actualizar la cantidad
  const actualizarCantidad = (producto) => {
    const CarritoActualizados = carrito.map((productoState) => {
      if (productoState.id == producto.id) {
        productoState.cantidad = producto.cantidad;
        return productoState;
      }
      return productoState;
    });
    setCarrito(CarritoActualizados);
  };

  // Eliminar producto
  const eliminarProductos = (id) => {
    const confirmar = confirm("¿Desea eliminar?");
    if (confirmar) {
      const CarritoActualizados = carrito.filter(
        (productoState) => productoState.id != id
      );
      setCarrito(CarritoActualizados);
      if (carrito.length == 1) {
        localStorage.removeItem("carrito-next-v1");
        setCarrito([]);
      }
    }
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProductos={eliminarProductos}
    />
  );
}

export default MyApp;
