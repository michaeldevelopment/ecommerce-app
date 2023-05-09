import { ReactNode } from "react";
import {
  categoriesType,
  galleryItemsInterface,
  inputValuesInterface,
  otherItemsInterface,
} from "./dataTypes";
import { productCartType } from "./globalStateTypes";

export interface navbarProps {
  children: ReactNode;
}

export interface titleTextProps {
  titleText: categoriesType;
}

export interface productTextProps {
  isNew: boolean;
  name: string;
  description: string;
  category: string;
  slug: string;
}

export interface productDetailTextProps {
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  features: string;
}

export interface otherProductDetailsProps {
  otherProducts: otherItemsInterface[];
}

export interface iconSVGProps {
  className?: string;
  fill?: string;
}

export interface iconSVGBookmarkActionableProps extends iconSVGProps {
  onClick: () => void;
}

export interface productDetailGalleryProps {
  productGallery: galleryItemsInterface;
}

export interface cartProductsProps {
  cartProducts: productCartType[];
  isInCheckoutPage?: boolean;
}

export interface cartProductsContainerProps {
  isInCheckoutPage: boolean;
  textHeading: string;
}

export interface inputValuesProps extends inputValuesInterface {
  register: any;
  inputErrors: any;
}

export interface formInputs {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPIN: string;
}
