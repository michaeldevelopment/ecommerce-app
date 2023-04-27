import React from "react";
import { productsDataListType } from "../../../types/dataTypes";
import { GetStaticProps } from "next";
import { pageIndividualProductProps } from "../../../types/pagesTypes";
import PreFooterSection from "../../../components/PreFooterSection";
import CategoryPreview from "../../../components/CategoryPreview";

export default function HeadphoneDetailPage({
  product,
}: pageIndividualProductProps) {
  return (
    <>
      <CategoryPreview />
      <PreFooterSection />
    </>
  );
}

export async function getStaticPaths() {
  const productsData: productsDataListType = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const paths = productsData.map((product) => ({
    params: { headphoneName: product.slug },
  }));

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
    (product) => product.slug === params?.headphoneName
  );

  console.log(product);

  return {
    props: {
      product,
    },
  };
};
