import { create } from "zustand";
import { productCartStateType } from "../types/globalStateTypes";

export const useProductsCartStore = create<productCartStateType>(
  (set, get) => ({
    productsCart: [],

    addProductToCart: (product) => {
      const { productsCart } = get();
      const newProductsCart = structuredClone(productsCart);
      const productIndex = newProductsCart.findIndex(
        (productElement) => product.name === productElement.name
      );
      const newProductInfo = newProductsCart[productIndex];

      productIndex < 0
        ? newProductsCart.push({
            ...product,
            price: product.quantity * product.price,
          })
        : (newProductsCart[productIndex] = {
            ...newProductInfo,
            quantity: newProductInfo.quantity + product.quantity,
            price: (newProductInfo.quantity + product.quantity) * product.price,
          });

      set({ productsCart: newProductsCart });
    },
  })
);
