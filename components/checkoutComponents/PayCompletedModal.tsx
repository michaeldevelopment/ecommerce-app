import Link from "next/link";
import React from "react";
import Modal from "react-bootstrap/Modal";
import SuccessIcon from "../../svg/SuccessIcon";
import { useProductsCartStore } from "../../store";
import styles from "../../styles/Checkout.module.scss";
import Image from "next/image";

const PayCompletedModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const grandTotal = useProductsCartStore(
    (state) => state.grandTotalCheckoutPay
  );

  const productsCart = useProductsCartStore((state) => state.productsCart);

  return (
    <Modal backdrop="static" show={false}>
      <section className={styles.modalContainer}>
        <SuccessIcon />
        <h1>
          THANK YOU <br /> FOR YOUR ORDER
        </h1>
        <p> You will receive an email confirmation shortly </p>
        <article>
          <div>
            <Image
              src={productsCart[0].image}
              alt={productsCart[0].name}
              width={30}
              height={30}
            />
            <p>
              <strong> {productsCart[0].name.split(" ")[0]} </strong>
              <span> ${productsCart[0].price} </span>
            </p>
            <span> x{productsCart[0].quantity} </span>
            <small> and {productsCart.length - 1} other item(s) </small>
          </div>
          <div>
            <p>GRAND TOTAL</p>
            <h3> ${grandTotal} </h3>
          </div>
        </article>
        <Link href="/"> GO TO HOME </Link>
      </section>
    </Modal>
  );
};

export default PayCompletedModal;
