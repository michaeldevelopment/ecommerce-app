import React from "react";
import styles from "../../styles/Home.module.scss";
import CategoryPreview from "../CategoryPreview";
import Image from "next/image";
import PreFooterSection from "../PreFooterSection";
import Link from "next/link";

export default function MidSection() {
  return (
    <>
      <CategoryPreview />

      <div className={styles.productPosts}>
        <div>
          <Image
            src="/home/desktop/image-speaker-zx9.png"
            alt="speakers"
            width={270}
            height={328}
          />
          <span>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href={"/speakers/zx9-speaker"}> SEE PRODUCT </Link>
          </span>
        </div>
        <div>
          <h2> ZX7 SPEAKER</h2>{" "}
          <Link href={"/speakers/zx7-speaker"}> SEE PRODUCT </Link>
        </div>
        <div>
          <Image
            src="/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            width={540}
            height={320}
          />
          <span>
            <h2> YX1 EARPHONES</h2>{" "}
            <Link href={"/earphones/yx1-earphones"}> SEE PRODUCT </Link>
          </span>
        </div>
      </div>

      <PreFooterSection />
    </>
  );
}
