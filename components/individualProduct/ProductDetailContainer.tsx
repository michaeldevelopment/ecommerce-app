import React from "react";
import { pageIndividualProductProps } from "../../types/pagesTypes";
import ProductDetailInfo from "./ProductDetailInfo";

const ProductDetailContainer = ({ product }: pageIndividualProductProps) => {
  return (
    <>
      <ProductDetailInfo product={product} />
    </>
  );
};

export default ProductDetailContainer;
