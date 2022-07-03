import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

function EntradaBlog({ entrada }) {
  const { titulo, published_at, contenido, imagen } = entrada[0];
  const img_entrada = imagen[0].url;
  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={img_entrada}
            alt="imagen de entrada"
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const urlApi = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(urlApi);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlApi = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlApi);
  const entrada = await respuesta.json();
  return {
    props: { entrada },
  };
}

export default EntradaBlog;
