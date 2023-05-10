import React from "react";
import PayCompletedModal from "./PayCompletedModal";

const CheckoutPayButton = () => {
  return (
    <>
      <button form="checkoutForm" type="submit">
        CONTINUE & PAY
      </button>
      <PayCompletedModal />
    </>
  );
};

export default CheckoutPayButton;