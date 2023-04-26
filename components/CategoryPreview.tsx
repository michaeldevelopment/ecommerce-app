import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { navlinksLabels } from "../data/navlinks";

const CategoryPreview = () => {
  return (
    <div className={styles.categoryProductsPreviewParent}>
      {navlinksLabels.map((navlinkLabel, index) => {
        return (
          index !== 0 && (
            <div className={styles.categoryProductsPreview} key={navlinkLabel}>
              <Image
                src={`/shared/desktop/${navlinkLabel}.png`}
                alt={navlinkLabel}
                width={438}
                height={422}
                quality={90}
              />
              <div>
                <h3> {navlinkLabel} </h3>
                <small> SHOP - </small>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default CategoryPreview;
