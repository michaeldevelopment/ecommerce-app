import React from "react";
import { navbarProps } from "../types/componentTypes";
import styles from "../styles/Navbar.module.scss";
import NavLinksMap from "./NavLinksMap";
import Footer from "./Footer";
import CartLayout from "./cartComponents/CartLayout";
import LogoIcon from "../svg/LogoIcon";

const LayoutNavbar = ({ children }: navbarProps) => {
  return (
    <>
      <nav className={styles.navbar}>
        <LogoIcon />
        <NavLinksMap />
        <CartLayout />
      </nav>
      {children}
      <Footer />
    </>
  );
};

export default LayoutNavbar;
