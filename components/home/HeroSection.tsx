import React from "react";
import styles from "../../styles/Home.module.scss";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div>
        <small> NEW PRODUCT</small>
        <h1>
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button> SEE PRODUCT </button>
      </div>
    </div>
  );
}
