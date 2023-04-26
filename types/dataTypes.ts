export type navlinksType = {
  home: string;
  earphones: string;
  speakers: string;
  headphones: string;
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

interface galleryItemsInterface {
  first: imageProductsInterface;
  second: imageProductsInterface;
  third: imageProductsInterface;
}

interface otherItemsInterface {
  slug: string;
  name: string;
  image: imageProductsInterface;
}

export interface productsDataInterface {
  id: number;
  slug: string;
  name: string;
  image: imageProductsInterface;
  category: string;
  categoryImage: imageProductsInterface;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: extraProductItemsInterface[];
  gallery: galleryItemsInterface;
  others: otherItemsInterface[];
}

export type productsDataListType = productsDataInterface[];
