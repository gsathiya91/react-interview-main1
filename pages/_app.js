import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/pages/products.module.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
