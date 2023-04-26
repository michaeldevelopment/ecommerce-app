import React from "react";
import { pageProductsDataProps } from "../types/pagesTypes";
import Image from "next/image";
import ProductText from "./ProductText";
import styles from "../styles/NavPages.module.scss";

export default function ProductsMap({ products }: pageProductsDataProps) {
  return (
    <>
      {products.map((product, index) => {
        return (
          <div
            key={product.id}
            className={`${styles.productsMapContainer} ${
              index % 2 !== 0 ? styles.reversedOrder : ""
            }`}
          >
            <Image
              src={product.image.desktop}
              alt={product.slug}
              width={450}
              height={467}
              quality={90}
            />
            <ProductText
              isNew={product.new}
              name={product.name}
              description={product.description}
            />
          </div>
        );
      })}
    </>
  );
}
