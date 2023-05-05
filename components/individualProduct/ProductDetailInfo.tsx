import React from "react";
import { pageIndividualProductProps } from "../../types/pagesTypes";
import styles from "../../styles/NavPages.module.scss";
import productCartStyles from "../../styles/ProductDetail.module.scss";
import Image from "next/image";
import ProductDetailText from "./ProductDetailText";
import GoPreviousPageButton from "../GoPreviousPageButton";

const ProductDetailInfo = ({
  product: {
    slug,
    name,
    image,
    new: isNew,
    price,
    description,
    features,
    includes,
  },
}: pageIndividualProductProps) => {
  return (
    <>
      <div className={styles.productsMapContainer}>
        <Image
          src={image.desktop}
          alt={slug}
          width={400}
          height={415}
          quality={90}
        />
        <ProductDetailText
          {...{ name, new: isNew, price, slug, description }}
        />
      </div>
      <div className={productCartStyles.productDetailContainer}>
        <div>
          <h2> FEATURES </h2>
          <p> {features} </p>
        </div>
        <div>
          <h2> IN THE BOX </h2>
          <ul>
            {includes.map((element) => {
              return (
                <li key={element.item}>
                  <span> {element.quantity}x </span> {element.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetailInfo;
