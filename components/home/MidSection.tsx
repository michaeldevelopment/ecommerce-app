import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import image from "../../public/home/products-preview/headphone.png";

export default function MidSection() {
  return (
    <>
      <div className={styles.categoryProductsPreview}>
        <Image
          src="/home/products-preview/headphone.png"
          alt="headphones"
          width={180}
          height={242}
          quality={90}
        />
        <div>
          <h3> Headphones </h3>
          <small> SHOP - </small>
        </div>
      </div>
    </>
  );
}
