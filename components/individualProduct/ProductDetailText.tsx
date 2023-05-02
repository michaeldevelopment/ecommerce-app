import React, { useState } from "react";
import { productInterface } from "../../types/dataTypes";
import productDetailStyles from "../../styles/ProductDetail.module.scss";
import navPagesStyle from "../../styles/NavPages.module.scss";
import { useProductsCartStore } from "../../store";

const ProductDetailText = ({
  new: isNew,
  name,
  description,
  slug,
  image,
  price,
  features,
  includes,
  gallery,
  others,
}: productInterface) => {
  const addProductToCart = useProductsCartStore(
    (state) => state.addProductToCart
  );
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    quantity !== 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const handleAddProductToCart = () => {
    const productObject = {
      name,
      price,
      image: `/cart/image-${slug}.jpg`,
      quantity,
    };

    addProductToCart(productObject);
  };

  return (
    <span>
      {isNew && <small> NEW PRODUCT </small>}
      <h1>{name}</h1>
      <p>{description}</p>
      <h3> ${price}</h3>
      <div className={productDetailStyles.productContainer}>
        <div className={productDetailStyles.productQuantityContainer}>
          <button onClick={handleDecreaseQuantity}> - </button>
          <span> {quantity} </span>
          <button onClick={handleIncreaseQuantity}> + </button>
        </div>
        <button
          className={navPagesStyle.addProductToCart}
          onClick={handleAddProductToCart}
        >
          ADD TO CART
        </button>
      </div>
    </span>
  );
};

export default ProductDetailText;
