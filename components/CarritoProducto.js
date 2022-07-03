import styles from "../styles/Carrito.module.css";
import Image from "next/image";

function CarritoProducto({ producto, actualizarCantidad, eliminarProductos }) {
  const { nombre, cantidad, precio, imagen, id } = producto;
  return (
    <div className={styles.producto}>
      <div>
        <Image
          layout="responsive"
          width={250}
          height={480}
          alt="Producto"
          src={imagen}
        />
      </div>
      <div>
        <h2 className={styles.nombre}>{nombre}</h2>
        <div className={styles.cantidad}>
          <p>Cantidad:</p>
          <select
            className={styles.select}
            required
            value={cantidad}
            onChange={(e) => {
              actualizarCantidad({
                id,
                cantidad: parseInt(e.target.value),
              });
            }}
          >
            <option value="" disabled>
              -- seleccione --
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <p className={styles.precio}>
          $<span>{precio}</span>
        </p>
        <p className={styles.subTotal}>
          SubTotal: <span>${precio * cantidad}</span>
        </p>
      </div>
      <button
        onClick={() => eliminarProductos(id)}
        type="button"
        className={styles.eliminar}
        title="Eliminar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="20"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth={"1.5"}
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

export default CarritoProducto;
