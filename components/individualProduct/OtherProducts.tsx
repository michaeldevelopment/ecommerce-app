import React from "react";
import { otherProductDetailsProps } from "../../types/componentTypes";
import Image from "next/image";
import style from "../../styles/ProductDetail.module.scss";

const OtherProducts = ({ otherProducts }: otherProductDetailsProps) => {
  return (
    <div className={style.productGalleryContainer}>
      {otherProducts.map((product) => {
        return (
          <div key={product.slug}>
            <Image
              src={product.image.desktop}
              alt={product.slug}
              width={700}
              height={636}
            />
            <h2> {product.name} </h2>
            <button> SEE PRODUCT</button>
          </div>
        );
      })}
    </div>
  );
};

export default OtherProducts;
