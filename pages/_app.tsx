import LayoutNavbar from "../components/LayoutNavbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutNavbar>
      <Component {...pageProps} />
    </LayoutNavbar>
  );
}

export default MyApp;
