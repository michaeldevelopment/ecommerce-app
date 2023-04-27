import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.scss";
import { navlinksLabels, navlinksUrls } from "../data/navlinks";

const NavLinksMap = () => {
  return (
    <div className={styles.navbarLinks}>
      {navlinksLabels.map((navlink, index) => (
        <Link key={navlink} href={navlinksUrls[index]}>
          {navlink}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksMap;
