import React from "react";
import { productTextProps } from "../types/componentTypes";

export default function ProductText({
  isNew,
  name,
  description,
}: productTextProps) {
  return (
    <span>
      {isNew && <small> NEW PRODUCT </small>}
      <h1>{name}</h1>
      <p>{description}</p>
      <button> SEE PRODUCT </button>
    </span>
  );
}
