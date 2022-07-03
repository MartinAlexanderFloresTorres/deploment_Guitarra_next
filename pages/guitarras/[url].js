import Layout from "../../components/Layout";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";

function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(1);
  const { nombre, descripcion, imagen, precio, _id } = guitarra[0];
  const img_guitarra = imagen.url;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }
    // objeto de guitarra
    const guitarraSeleccionada = {
      id: _id,
      imagen: img_guitarra,
      nombre,
      precio,
      cantidad,
    };
    // Agregar al carrito
    agregarCarrito(guitarraSeleccionada);
  };
  return (
    <Layout pagina={nombre}>
      <main className="contenedor">
        <div className={styles.contenido_guitarra_dos}>
          <Image
            layout="responsive"
            width={100}
            height={200}
            src={img_guitarra}
            alt={`Guitarra ${nombre}`}
            priority
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p className={styles.contenido__precio}>${precio}</p>
            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label htmlFor="cantidad">Cantidad:</label>
              <select
                required
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
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
              <input type="submit" value="Agregar Al Carrito" />
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps({ query: { url } }) {
  const urlApi = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlApi);
  const guitarra = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}

export default Producto;
