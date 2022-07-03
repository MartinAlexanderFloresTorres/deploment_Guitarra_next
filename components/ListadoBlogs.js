import styles from "../styles/Blog.module.css";
import Entrada from "./Entrada";

function ListadoBlogs({ entradas }) {
  return (
    <div className={styles.grid}>
      {entradas.map((entrada) => (
        <Entrada key={entrada._id} entrada={entrada} />
      ))}
    </div>
  );
}

export default ListadoBlogs;
