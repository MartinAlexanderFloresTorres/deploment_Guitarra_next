import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

function Entrada({ entrada }) {
  const { titulo, resumen, imagen, published_at, url } = entrada;
  let img = imagen[0].url;

  return (
    <article className={styles.article}>
      <Image
        priority
        src={img}
        layout="responsive"
        alt="entrada"
        width={100}
        height={75}
      />
      <div className={styles.contenido}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>
            Leer Entrada
          </a>
        </Link>
      </div>
    </article>
  );
}

export default Entrada;
