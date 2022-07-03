import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css"

function Nosotros() {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image layout="responsive" priority width={600} height={450} src="/img/nosotros.jpg" alt="nosotros" />
          <div className={styles.descripcion}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quo fuga voluptatibus temporibus voluptatum, repellat dolor
              doloribus, totam voluptates quod quisquam nobis explicabo culpa.
            </p>
            <p>
              Tenetur quos at explicabo ut modi. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Repellat asperiores, molestias
              ducimus doloribus necessitatibus maxime commodi maiores et magnam
              id?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default Nosotros;
