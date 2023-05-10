import React from "react";
import { formData } from "../../../data/formData";
import InputValues from "./InputValues";
import { useForm } from "react-hook-form";
import { formInputs } from "../../../types/componentTypes";
import { useProductsCartStore } from "../../../store";
import GoPreviousPageButton from "../../GoPreviousPageButton";

const CheckoutForm = () => {
  const showModal = useProductsCartStore((state) => state.showModal);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formInputs>();
  const handleOnSubmit = (data: formInputs, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    showModal();
  };

  return (
    <>
      <GoPreviousPageButton />
      <form id="checkoutForm" onSubmit={handleSubmit(handleOnSubmit)}>
        <h1> CHECKOUT </h1>
        <div>
          <p> BILLING DETAILS </p>
          {formData
            .map((inputElement) => {
              return (
                <InputValues
                  key={inputElement.label}
                  {...inputElement}
                  register={register}
                  inputErrors={errors}
                />
              );
            })
            .slice(0, 3)}
        </div>
        <div>
          <p> SHIPPING INFO </p>
          {formData
            .map((inputElement) => {
              return (
                <InputValues
                  key={inputElement.label}
                  {...inputElement}
                  register={register}
                  inputErrors={errors}
                />
              );
            })
            .slice(3, 7)}
        </div>
        <div>
          <p> PAYMENT DETAILS </p>
          {formData
            .map((inputElement) => {
              return (
                <InputValues
                  key={inputElement.label}
                  {...inputElement}
                  register={register}
                  inputErrors={errors}
                />
              );
            })
            .slice(7, 9)}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
