import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Main } from "../layouts/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shortly Links</title>
        <meta name="description" content="Create shorter links" />
        <link rel="icon" href="/favicon.ico" />
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
