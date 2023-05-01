export type navlinksType = {
  home: string;
  earphones: string;
  speakers: string;
  headphones: string;
  cart: string;
};

export type categoriesType = "headphones" | "earphones" | "speakers";

interface imageProductsInterface {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface extraProductItemsInterface {
  quantity: number;
  item: string;
}

export interface galleryItemsInterface {
  first: imageProductsInterface;
  second: imageProductsInterface;
  third: imageProductsInterface;
}

export interface otherItemsInterface {
  slug: string;
  name: string;
  image: imageProductsInterface;
}

export interface productInterface {
  slug: string;
  name: string;
  image: imageProductsInterface;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: extraProductItemsInterface[];
  gallery: galleryItemsInterface;
  others: otherItemsInterface[];
}

export interface productsDataInterface extends productInterface {
  id: number;
  category: string;
  categoryImage: imageProductsInterface;
}

export type productsDataListType = productsDataInterface[];
