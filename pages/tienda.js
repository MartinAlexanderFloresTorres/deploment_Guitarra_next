import Layout from "../components/Layout";
import Listado from "../components/Listado";

function Tienda({guitarras}) {

  return (
    <Layout pagina="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuesta coleccion</h1>
        <Listado guitarras={guitarras}/>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const urlApi = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const respuesta = await fetch(urlApi);
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
