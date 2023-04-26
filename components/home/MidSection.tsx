import React from "react";
import styles from "../../styles/Home.module.scss";
import CategoryPreview from "../CategoryPreview";
import Image from "next/image";
import PreFooterSection from "../PreFooterSection";

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
            <button> SEE PRODUCT </button>
          </span>
        </div>
        <div>
          <h2> ZX7 SPEAKER</h2> <button> SEE PRODUCT </button>
        </div>
        <div>
          <Image
            src="/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            width={540}
            height={320}
          />
          <span>
            <h2> YX1 EARPHONES</h2> <button> SEE PRODUCT </button>
          </span>
        </div>
      </div>

      <PreFooterSection />
    </>
  );
}
