import React, { useEffect } from "react";
import { cartProductsProps } from "../../types/componentTypes";
import styles from "../../styles/Cart.module.scss";
import Link from "next/link";
import { useProductsCartStore } from "../../store";
import CheckoutPayButton from "../checkoutComponents/CheckoutPayButton";

const TotalCheckout = ({
  cartProducts,
  isInCheckoutPage,
}: cartProductsProps) => {
  const setShowCart = useProductsCartStore((state) => state.setShowCart);
  const grandTotal = useProductsCartStore(
    (state) => state.grandTotalCheckoutPay
  );
  const setGrandTotalCheckoutPay = useProductsCartStore(
    (state) => state.setGrandTotalCheckoutPay
  );

  let totalPay = cartProducts.reduce(
    (acc, el) => el.price * el.quantity + acc,
    0
  );

  const checkoutMapObj = [
    {
      text: "total",
      price: totalPay,
    },
    {
      text: "shiping",
      price: 50,
    },
    {
      text: "vat (included)",
      price: 1079,
    },
  ];

  const grandTotalPay = checkoutMapObj.reduce((acc, el) => el.price + acc, 0);
  useEffect(() => {
    setGrandTotalCheckoutPay(grandTotalPay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPay]);

  return (
    <div className={styles.cartProductCheckout}>
      {!isInCheckoutPage ? (
        <>
          <p>
            <span>TOTAL </span>
            <strong>${totalPay}</strong>
          </p>
          <Link href="/checkout" onClick={() => setShowCart(false)}>
            CHECKOUT
          </Link>
        </>
      ) : (
        <>
          {checkoutMapObj.map((element) => {
            return (
              <p key={element.text}>
                <span>{element.text.toUpperCase()} </span>{" "}
                <strong> ${element.price}</strong>
              </p>
            );
          })}
          <p>
            <span>GRAND TOTAL </span>
            <strong>${grandTotal}</strong>
          </p>
          <CheckoutPayButton />
        </>
      )}
    </div>
  );
};

export default TotalCheckout;
