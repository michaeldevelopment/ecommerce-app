import React from "react";
import { pageIndividualProductProps } from "../../types/pagesTypes";
import styles from "../../styles/NavPages.module.scss";
import productCartStyles from "../../styles/ProductDetail.module.scss";
import Image from "next/image";
import ProductDetailText from "./ProductDetailText";

const ProductDetailInfo = ({ product }: pageIndividualProductProps) => {
  const { id, image, slug, category, categoryImage, ...productRest } = product;

  return (
    <div>
      <div className={styles.productsMapContainer}>
        <Image
          src={image.desktop}
          alt={slug}
          width={450}
          height={467}
          quality={90}
        />
        <ProductDetailText
          {...productRest}
          slug={product.slug}
          image={product.image}
        />
      </div>
      <div className={productCartStyles.cartProductDetailsContainer}>
        <div>
          <h2> FEATURES </h2>
          <p> {product.features} </p>
        </div>
        <div>
          <h2> IN THE BOX </h2>
          <ul>
            {product.includes.map((element) => {
              return (
                <li key={element.item}>
                  <span> {element.quantity}x </span> {element.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
