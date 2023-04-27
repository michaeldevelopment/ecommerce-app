import React from "react";
import { navbarProps } from "../types/componentTypes";
import { navlinksLabels, navlinksUrls } from "../data/navlinks";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import NavLinksMap from "./NavLinksMap";
import Footer from "./Footer";

const LayoutNavbar = ({ children }: navbarProps) => {
  return (
    <>
      <div className={styles.navbar}>
        <div> Logo </div>
        <NavLinksMap />
        <div> carrito </div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default LayoutNavbar;
