import React from "react";
import { useProductsCartStore } from "../../store";
import CartProductsMap from "./CartProductsMap";
import TotalCheckout from "./TotalCheckout";
import CartHeading from "./CartHeading";
import styles from "../../styles/Cart.module.scss";

const CartProductsContainer = () => {
  const productsCart = useProductsCartStore((state) => state.productsCart);

  return (
    <div className={styles.cartProductContainer}>
      {productsCart.length ? (
        <CartHeading cartProductsLength={productsCart.length} />
      ) : null}
      {productsCart.length ? (
        <CartProductsMap cartProducts={productsCart} />
      ) : (
        <p> Your cart is empty :( </p>
      )}
      {productsCart.length ? (
        <TotalCheckout cartProducts={productsCart} />
      ) : null}
    </div>
  );
};

export default CartProductsContainer;
