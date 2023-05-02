export interface productCartType {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface productCartStateType {
  productsCart: productCartType[];
  addProductToCart: (product: productCartType) => void;
  handleQuantityCartProduct: (quantity: number, productName: string) => void;
  removeAllCartProducts: () => void;
}
