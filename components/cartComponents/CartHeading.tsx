import React from "react";
import { useProductsCartStore } from "../../store";
import styles from "../../styles/Cart.module.scss";

const CartHeading = ({
  cartProductsLength,
  isInCheckoutPage,
  textHeading,
}: {
  cartProductsLength: number;
  isInCheckoutPage: boolean;
  textHeading: string;
}) => {
  const removeAllCartProducts = useProductsCartStore(
    (state) => state.removeAllCartProducts
  );

  return (
    <div className={styles.cartProductHeading}>
      {!isInCheckoutPage ? (
        <>
          <h2>
            {textHeading.toUpperCase()}({cartProductsLength})
          </h2>
          <button onClick={() => removeAllCartProducts()}> Remove all</button>
        </>
      ) : (
        <h2> {textHeading.toUpperCase()}</h2>
      )}
    </div>
  );
};

export default CartHeading;
