import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css"

function Guitarra({ guitarra }) {
  const { nombre, descripcion, imagen, precio, url } = guitarra;
  const img_guitarra = imagen.url;
  return (
    <article className={styles.contenido_guitarra}>
      <Image
        layout="responsive"
        width={180}
        height={350}
        src={img_guitarra}
        alt={`Guitarra ${nombre}`}
        priority
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.contenido__descripcion}>{descripcion}</p>
        <p className={styles.contenido__precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.contenido__link}>Ver Producto</a>
        </Link>
      </div>
    </article>
  );
}

export default Guitarra;
