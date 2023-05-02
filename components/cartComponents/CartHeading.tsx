import React from "react";
import { useProductsCartStore } from "../../store";
import styles from "../../styles/Cart.module.scss";

const CartHeading = ({
  cartProductsLength,
}: {
  cartProductsLength: number;
}) => {
  const removeAllCartProducts = useProductsCartStore(
    (state) => state.removeAllCartProducts
  );

  return (
    <div className={styles.cartProductHeading}>
      <h2> CART({cartProductsLength})</h2>
      <button onClick={() => removeAllCartProducts()}> Remove all</button>
    </div>
  );
};

export default CartHeading;
