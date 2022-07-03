import React from "react";
import styles from "../styles/BannerCurso.module.css";

function BannerCurso({ banner }) {
  const { titulo, contenido, fondo } = banner;
  const img_fondo = fondo.url;
  return (
    <section
      className={styles.fondo_bg}
      style={{ backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${img_fondo})` }}
    >
      <div className={`contenedor ${styles.fondo__contenido}`}>
        <div>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
          <a href="#">Mas Información</a>
        </div>
      </div>
    </section>
  );
}
export default BannerCurso;
