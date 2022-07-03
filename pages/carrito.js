import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import CarritoProducto from "../components/CarritoProducto";

function Carrito({ carrito, actualizarCantidad, eliminarProductos }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (carrito.length > 0) {
      const calculoTotal = carrito.reduce(
        (total, articulo) => total + articulo.precio * articulo.cantidad,
        0
      );
      setTotal(calculoTotal);
    } else {
      setTotal(0);
    }
  }, [carrito]);
  
  return (
    <Layout pagina="Carrito">
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          {carrito.length <= 0 ? (
            <h3>Carrito vacio</h3>
          ) : (
            <>
              <h3>Articulos</h3>
              {carrito.map((producto) => (
                <CarritoProducto
                  key={producto.id}
                  producto={producto}
                  actualizarCantidad={actualizarCantidad}
                  eliminarProductos={eliminarProductos}
                />
              ))}
            </>
          )}
        </div>
        {total > 0 && (
          <div className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <div>
              <p>
                Total a pagar: <span>{total}</span>
              </p>
            </div>
            <button className={styles.pagar}>Procesar Pago</button>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Carrito;
