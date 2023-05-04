import React, { useState } from "react";
import PayCompletedModal from "./PayCompletedModal";

const CheckoutPayButton = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShowModal = () => {
    setShow(true);
  };

  return (
    <>
      <button
        form="checkoutForm"
        type="submit"
        onClick={() => handleShowModal()}
      >
        CONTINUE & PAY
      </button>
      <PayCompletedModal isModalOpen={show} />
    </>
  );
};

export default CheckoutPayButton;
