import React from "react";
import { useProductsCartStore } from "../../store";
import CartProductsMap from "./CartProductsMap";
import TotalCheckout from "./TotalCheckout";
import CartHeading from "./CartHeading";

import styles from "../../styles/Cart.module.scss";
import { cartProductsContainerProps } from "../../types/componentTypes";

const CartProductsContainer = ({
  isInCheckoutPage,
  textHeading,
}: cartProductsContainerProps) => {
  const productsCart = useProductsCartStore((state) => state.productsCart);

  return (
    <div className={styles.cartProductContainer}>
      {productsCart.length ? (
        <CartHeading
          cartProductsLength={productsCart.length}
          isInCheckoutPage={isInCheckoutPage}
          textHeading={textHeading}
        />
      ) : null}
      {productsCart.length ? (
        <CartProductsMap
          cartProducts={productsCart}
          isInCheckoutPage={isInCheckoutPage}
        />
      ) : (
        <p> Your cart is empty :( </p>
      )}
      {productsCart.length ? (
        <TotalCheckout
          cartProducts={productsCart}
          isInCheckoutPage={isInCheckoutPage}
        />
      ) : null}
    </div>
  );
};

export default CartProductsContainer;
