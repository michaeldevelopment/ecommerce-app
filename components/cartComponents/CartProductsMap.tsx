import React from "react";
import { useProductsCartStore } from "../../store";
import { cartProductsProps } from "../../types/componentTypes";
import styles from "../../styles/Cart.module.scss";
import Image from "next/image";

const CartProductsMap = ({
  cartProducts,
  isInCheckoutPage,
}: cartProductsProps) => {
  const handleQuantityCartProduct = useProductsCartStore(
    (state) => state.handleQuantityCartProduct
  );
  const handleQuantity = (
    e: React.MouseEvent<HTMLButtonElement>,
    productName: string
  ) => {
    const quantityNumber = Number((e.currentTarget.textContent as string) + 1);
    handleQuantityCartProduct(quantityNumber, productName);
  };

  return (
    <div className={styles.cartProductMap}>
      {cartProducts.map((product) => {
        return (
          <div key={product.name}>
            <Image
              src={product.image}
              alt={product.name}
              width={95}
              height={95}
              quality={90}
            />
            <div>
              <h3> {product.name.split(" ")[0]} </h3>
              <p> ${product.price} </p>
            </div>
            {!isInCheckoutPage ? (
              <div>
                <button onClick={(e) => handleQuantity(e, product.name)}>
                  -
                </button>
                <span> {product.quantity} </span>
                <button onClick={(e) => handleQuantity(e, product.name)}>
                  +
                </button>
              </div>
            ) : (
              <div>
                <strong> x{product.quantity}</strong>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CartProductsMap;
