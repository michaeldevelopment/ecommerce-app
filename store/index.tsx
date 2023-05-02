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

    handleQuantityCartProduct: (quantity, productName) => {
      const { productsCart } = get();
      let newProductsCart = structuredClone(productsCart);
      const productIndex = newProductsCart.findIndex(
        (productElement) => productName === productElement.name
      );

      const newProductInfo = newProductsCart[productIndex];

      newProductsCart[productIndex] = {
        ...newProductInfo,
        quantity: newProductInfo.quantity + quantity,
      };

      newProductsCart[productIndex].quantity === 0 &&
        (newProductsCart = productsCart.filter(
          (product) => product.name !== productName
        ));

      set({ productsCart: newProductsCart });
    },

    removeAllCartProducts: () => {
      set({ productsCart: [] });
    },
  })
);
