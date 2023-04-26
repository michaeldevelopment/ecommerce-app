import React from "react";
import PageTitle from "../../components/PageTitle";
import { GetStaticProps } from "next";
import { pageProductsDataProps } from "../../types/pagesTypes";
import { productsDataListType } from "../../types/dataTypes";
import ProductsMap from "../../components/ProductsMap";
import PreFooterSection from "../../components/PreFooterSection";
import CategoryPreview from "../../components/CategoryPreview";

export default function EarphonesPage({ products }: pageProductsDataProps) {
  return (
    <>
      <PageTitle titleText="earphones" />
      <ProductsMap products={products} />
      <CategoryPreview />
      <PreFooterSection />
    </>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const productsData: productsDataListType = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const products = productsData.filter(
    (product) => product.category === "earphones"
  );

  return {
    props: {
      products,
    },
  };
}
