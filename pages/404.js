import Layout from "../components/Layout"
import Link from "next/link"
import styles from "../styles/NotFound.module.css"

function NotFound() {
  return (
    <Layout
      pagina="NotFound"
    >
      <main className={`contenedor ${styles.not_found}`}>
        <h1 className="heading">Pagina no encontrada</h1>
        <h2 className={styles.error}>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h2>
        <Link href="/">
          <a className={styles.link}>Regresar al inicio</a>
        </Link>
      </main>
    </Layout>
  )
}

export default NotFound