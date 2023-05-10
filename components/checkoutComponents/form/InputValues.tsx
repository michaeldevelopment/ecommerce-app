import React from "react";
import { inputValuesProps } from "../../../types/componentTypes";
import styles from "../../../styles/Checkout.module.scss";

const InputValues = ({
  label,
  placeholder,
  type,
  validateOptions,
  register,
  inputErrors,
  slug,
}: inputValuesProps) => {
  return (
    <>
      <section>
        <label htmlFor={label}> {label} </label>
        {inputErrors[slug] && <small> {inputErrors[slug].message} </small>}
      </section>
      <input
        name={label}
        id={label}
        placeholder={placeholder}
        maxLength={label === "e-Money PIN" ? 4 : undefined}
        type={type}
        {...register(slug, validateOptions)}
        className={inputErrors[slug] ? styles.error : ""}
      ></input>
    </>
  );
};

export default InputValues;
