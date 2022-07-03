import Layout from "../components/Layout";
import Listado from "../components/Listado";
import BannerCurso from "../components/BannerCurso";
import ListadoBlogs from "../components/ListadoBlogs";

function Home({ guitarras, banner, entradas }) {
  return (
    <Layout 
      pagina="Inicio"
      guitarra={guitarras[5]}
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>
        <Listado guitarras={guitarras} />
      </main>
      <BannerCurso banner={banner} />
      <section className="contenedor">
        <h2 className="heading">Blogs Recientes</h2>
        <ListadoBlogs entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlApi = `${process.env.API_URL}/guitarras?_limit=9&_sort=created_at:desc`;
  const urlApi_banner = `${process.env.API_URL}/banner-curso`;
  const urlApiBlogs = `${process.env.API_URL}/blogs?&_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resBanner, resBlogs] = await Promise.all([
    fetch(urlApi),
    fetch(urlApi_banner),
    fetch(urlApiBlogs),
  ]);

  const [guitarras, banner, entradas] = await Promise.all([
    resGuitarras.json(),
    resBanner.json(),
    resBlogs.json(),
  ]);

  return {
    props: {
      guitarras,
      banner,
      entradas,
    },
  };
}
export default Home;
