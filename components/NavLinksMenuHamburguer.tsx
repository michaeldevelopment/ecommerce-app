import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.scss";
import { navlinksLabels, navlinksUrls } from "../data/navlinks";
import { navMenuHamburguerProps } from "../types/componentTypes";

const NavLinksMenuHamburguer = ({ setShowMenu }: navMenuHamburguerProps) => {
  return (
    <div className={styles.navbarLinksMenuHamburguer}>
      {navlinksLabels.map((navlink, index) => (
        <Link
          key={navlink}
          href={navlinksUrls[index]}
          onClick={() => setShowMenu(false)}
        >
          {navlink}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksMenuHamburguer;
