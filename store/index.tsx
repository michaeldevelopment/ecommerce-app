import { create } from "zustand";
import { productCartStateType } from "../types/globalStateTypes";

export const useProductsCartStore = create<productCartStateType>(
  (set, get) => ({
    productsCart: [],
    grandTotalCheckoutPay: 0,
    setShowCart: () => null,
    showModalBool: false,

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
          })
        : (newProductsCart[productIndex] = {
            ...newProductInfo,
            quantity: newProductInfo.quantity + product.quantity,
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

    addSetShowCartFunction: (setShowCart) => {
      set({ setShowCart });
    },

    setGrandTotalCheckoutPay: (price) => {
      set({ grandTotalCheckoutPay: price });
    },

    showModal: () => {
      set({ showModalBool: true });
    },

    hideModal: () => {
      set({ showModalBool: false });
    },
  })
);
