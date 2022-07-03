import Guitarra from "./Guitarra"
import styles from "../styles/Listado.module.css"

function Listado({guitarras}) {
  return (
    <div className={styles.listado}>
      {guitarras.map(guitarra => (<Guitarra key={guitarra.url} guitarra={guitarra} />))}
    </div>
  )
}

export default Listado