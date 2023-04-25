import React from "react";
import { navbarProps } from "../types/componentTypes";
import { navlinksLabels, navlinksUrls } from "../data/navlinks";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const LayoutNavbar = ({ children }: navbarProps) => {
  return (
    <>
      <div className={styles.navbar}>
        <div> Logo </div>
        <div className={styles.navbarLinks}>
          {navlinksLabels.map((navlink, index) => (
            <Link key={navlink} href={navlinksUrls[index]}>
              {navlink}
            </Link>
          ))}
        </div>
        <div> carrito </div>
      </div>
      {children}
    </>
  );
};

export default LayoutNavbar;
