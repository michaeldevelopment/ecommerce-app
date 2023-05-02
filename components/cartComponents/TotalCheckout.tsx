import React from "react";
import { cartProductsProps } from "../../types/componentTypes";
import styles from "../../styles/Cart.module.scss";

const TotalCheckout = ({ cartProducts }: cartProductsProps) => {
  return (
    <div className={styles.cartProductCheckout}>
      <span>TOTAL </span>
      <strong>
        ${cartProducts.reduce((acc, el) => el.price * el.quantity + acc, 0)}
      </strong>
      <button> CHECKOUT </button>
    </div>
  );
};

export default TotalCheckout;
