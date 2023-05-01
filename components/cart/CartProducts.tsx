import React from "react";
import { useProductsCartStore } from "../../store";

const CartProducts = () => {
  const productsCart = useProductsCartStore((state) => state.productsCart);
  return (
    <>
      {productsCart.map((product) => {
        return (
          <div key={product.name}>
            <p> {product.name} </p>
            <p> {product.quantity} </p>
            <p> ${product.price} </p>
          </div>
        );
      })}
      <strong>Total: </strong>
      {productsCart.reduce((acc, el) => el.price + acc, 0)}
      <button> CHECKOUT </button>
    </>
  );
};

export default CartProducts;
