import React from "react";
import { pageIndividualProductProps } from "../../types/pagesTypes";
import styles from "../../styles/NavPages.module.scss";
import Image from "next/image";
import ProductDetailText from "./ProductDetailText";

const ProductDetailInfo = ({ product }: pageIndividualProductProps) => {
  const { id, image, slug, category, categoryImage, ...productRest } = product;

  return (
    <div key={id} className={styles.productsMapContainer}>
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
  );
};

export default ProductDetailInfo;
