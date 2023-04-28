import React from "react";
import { productDetailGalleryProps } from "../../types/componentTypes";
import Image from "next/image";
import style from "../../styles/ProductDetail.module.scss";

const ProductDetailGallery = ({
  productGallery,
}: productDetailGalleryProps) => {
  return (
    <div className={style.productDetailGallery}>
      <div>
        <Image
          src={productGallery.first.desktop}
          alt="photo1"
          width={445}
          height={280}
        />
        <Image
          src={productGallery.second.desktop}
          alt="photo2"
          width={445}
          height={280}
        />
      </div>
      <Image
        src={productGallery.third.desktop}
        alt="photo3"
        width={635}
        height={592}
      />
    </div>
  );
};

export default ProductDetailGallery;
