import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";

export default function PreFooterSection() {
  return (
    <div className={styles.preFooterSection}>
      <div>
        <h1>
          Bringing you the <br /> <span> best </span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src="/shared/desktop/image-best-gear.jpg"
        alt="image-best-gear"
        width={540}
        height={588}
      />
    </div>
  );
}
