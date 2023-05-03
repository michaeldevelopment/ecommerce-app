import React, { useState } from "react";
import CartIcon from "../../svg/CartIcon";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartProductsContainer from "./CartProductsContainer";
import { useProductsCartStore } from "../../store";

export default function CartLayout() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addSetShowCartFunction = useProductsCartStore(
    (state) => state.addSetShowCartFunction
  );

  addSetShowCartFunction(setShow);

  return (
    <>
      <CartIcon onClick={handleShow} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement={"end"}
      >
        <Offcanvas.Header closeButton> {""} </Offcanvas.Header>
        <CartProductsContainer isInCheckoutPage={false} textHeading="Cart" />;
      </Offcanvas>
    </>
  );
}
