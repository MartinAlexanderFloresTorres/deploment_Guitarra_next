import Layout from "../components/Layout";
import ListadoBlogs from "../components/ListadoBlogs";

function Blog({ entradas }) {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <ListadoBlogs entradas={entradas} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  /* getStaticProps - no cambia la data */
  /* getServerSideProps - si cambia constantemente la data */
  const urlBlogs = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(urlBlogs);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
