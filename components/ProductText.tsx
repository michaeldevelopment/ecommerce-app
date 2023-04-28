import React from "react";
import { productTextProps } from "../types/componentTypes";
import Link from "next/link";

export default function ProductText({
  isNew,
  name,
  description,
  category,
  slug,
}: productTextProps) {
  console.log(category, slug);
  return (
    <span>
      {isNew && <small> NEW PRODUCT </small>}
      <h1>{name}</h1>
      <p>{description}</p>
      <Link href={`/${category}/${slug}`}> SEE PRODUCT </Link>
    </span>
  );
}
