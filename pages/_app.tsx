import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Main } from "../layouts/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shortly - Links Made Easier</title>
        <meta name="description" content="Create shorter links with Shortly" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Nav />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
