import React from "react";
import CartProductsContainer from "../cartComponents/CartProductsContainer";
import styles from "../../styles/Checkout.module.scss";
import CheckoutForm from "./CheckoutForm";

const CheckoutContainer = () => {
  return (
    <section className={styles.checkoutContainer}>
      <CheckoutForm />
      <CartProductsContainer isInCheckoutPage={true} textHeading="Summary" />;
    </section>
  );
};

export default CheckoutContainer;
