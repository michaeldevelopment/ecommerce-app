import { productsDataInterface, productsDataListType } from "./dataTypes";

export type pageProductsDataProps = {
  products: productsDataListType;
};

export type pageIndividualProductProps = {
  product: productsDataInterface;
};
