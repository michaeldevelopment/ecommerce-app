import React from "react";
import { productsDataListType } from "../../../types/dataTypes";
import { GetStaticProps } from "next";
import { pageIndividualProductProps } from "../../../types/pagesTypes";
import PreFooterSection from "../../../components/PreFooterSection";
import CategoryPreview from "../../../components/CategoryPreview";
import ProductDetailContainer from "../../../components/individualProduct/ProductDetailContainer";
import GoPreviousPageButton from "../../../components/GoPreviousPageButton";

export default function EarphoneDetailPage({
  product,
}: pageIndividualProductProps) {
  return (
    <>
      <GoPreviousPageButton />
      <ProductDetailContainer product={product} />
      <CategoryPreview />
      <PreFooterSection />
    </>
  );
}

export async function getStaticPaths() {
  const productsData: productsDataListType = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const paths = productsData
    .filter((product) => product.category === "earphones")
    .map((product) => ({
      params: { earphoneName: product.slug },
    }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const productsData: productsDataListType = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const { params } = context;

  const product = productsData.find(
    (product) => product.slug === params?.earphoneName
  );

  return {
    props: {
      product,
    },
  };
};
