import React from "react";
import NavLinksMap from "./NavLinksMap";
import styles from "../styles/Footer.module.scss";
import FacebookIcon from "../svg/FacebookIcon";
import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";
import LogoIcon from "../svg/LogoIcon";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <LogoIcon /> <NavLinksMap />
      </div>
      <div>
        <p>
          Soundify is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <span className={styles.socialMediaIcons}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </span>
      </div>
      Copyright 2021. All Rights Reserved
    </div>
  );
}
