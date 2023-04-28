import React from "react";
import { pageIndividualProductProps } from "../../types/pagesTypes";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailGallery from "./ProductDetailGallery";
import OtherProducts from "./OtherProducts";

const ProductDetailContainer = ({ product }: pageIndividualProductProps) => {
  return (
    <>
      <ProductDetailInfo product={product} />
      <ProductDetailGallery productGallery={product.gallery} />
      <OtherProducts otherProducts={product.others} />
    </>
  );
};

export default ProductDetailContainer;
