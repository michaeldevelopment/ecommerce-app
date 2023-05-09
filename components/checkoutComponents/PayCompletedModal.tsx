import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import SuccessIcon from "../../svg/SuccessIcon";
import { useProductsCartStore } from "../../store";
import styles from "../../styles/Checkout.module.scss";
import Image from "next/image";
import Spinner from "../Spinner";

const PayCompletedModal = () => {
  const grandTotal = useProductsCartStore(
    (state) => state.grandTotalCheckoutPay
  );
  const productsCart = useProductsCartStore((state) => state.productsCart);
  const showModalBool = useProductsCartStore((state) => state.showModalBool);
  const hideModal = useProductsCartStore((state) => state.hideModal);
  const removeAllCartProducts = useProductsCartStore(
    (state) => state.removeAllCartProducts
  );

  const [mockPaymentLoader, setMockPayment] = useState(true);

  const handleGoToHome = () => {
    hideModal();
    removeAllCartProducts();
    setMockPayment(true);
  };

  useEffect(() => {
    if (mockPaymentLoader && showModalBool) {
      setTimeout(() => {
        setMockPayment(false);
      }, 3000);
    }
  }, [mockPaymentLoader, showModalBool]);

  return (
    <Modal backdrop="static" show={showModalBool}>
      <section className={styles.modalContainer}>
        {mockPaymentLoader ? (
          <Spinner />
        ) : (
          <>
            <SuccessIcon />
            <h1>
              THANK YOU <br /> FOR YOUR ORDER
            </h1>
            <p> You will receive an email confirmation shortly </p>
            <article>
              <div>
                <section>
                  <Image
                    src={productsCart[0].image}
                    alt={productsCart[0].name}
                    width={50}
                    height={50}
                  />
                  <p>
                    <strong> {productsCart[0].name.split(" ")[0]} </strong>
                    <span> ${productsCart[0].price} </span>
                  </p>
                  <span> x{productsCart[0].quantity} </span>
                </section>
                {productsCart.length - 1 > 0 ? (
                  <small>and {productsCart.length - 1} other item(s)</small>
                ) : (
                  <small> Enjoy it a lot!</small>
                )}
              </div>
              <div>
                <p>GRAND TOTAL</p>
                <h3> ${grandTotal} </h3>
              </div>
            </article>
            <Link href="/" onClick={() => handleGoToHome()}>
              BACK TO HOME
            </Link>
          </>
        )}
      </section>
    </Modal>
  );
};

export default PayCompletedModal;
