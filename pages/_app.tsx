import LayoutNavbar from "../components/LayoutNavbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutNavbar>
      <Component {...pageProps} />
    </LayoutNavbar>
  );
}

export default MyApp;
