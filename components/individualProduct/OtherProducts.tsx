import React from "react";
import { otherProductDetailsProps } from "../../types/componentTypes";
import Image from "next/image";
import style from "../../styles/ProductDetail.module.scss";
import Link from "next/link";

const OtherProducts = ({ otherProducts }: otherProductDetailsProps) => {
  const linkRouteObj: { [key: string]: string } = {
    earphones: "earphones",
    headphones: "headphones",
    speaker: "speakers",
  };

  return (
    <div className={style.productGalleryContainer}>
      {otherProducts.map((product) => {
        const slugSplit = product.slug.split("-");
        return (
          <div key={product.slug}>
            <Image
              src={product.image.desktop}
              alt={product.slug}
              width={700}
              height={636}
            />
            <h2> {product.name} </h2>
            <Link
              href={`/${linkRouteObj[slugSplit[slugSplit.length - 1]]}/${
                product.slug
              }`}
            >
              SEE PRODUCT
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default OtherProducts;
