import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

function Header({ guitarra }) {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href="/">
              <a>
                <Image src="/img/logo.svg" alt="logo" width={200} height={50} />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image src={"/img/carrito.png"} layout="fixed" width={30} height={25} alt="carrito" />
              </a>
            </Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h1>Modelo: {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.link}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
      {pathname == "/" && (
        <div className={styles.guitarra}>
          <Image
            priority
            layout="responsive"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="imagen header"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
