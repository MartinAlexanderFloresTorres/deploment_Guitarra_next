import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, pagina, guitarra }) {
  return (
    <>
      <Head>
        <title>Guitarra - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarra." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </>
  );
}
Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
