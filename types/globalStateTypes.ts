export interface productCartType {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

type setStateType = React.Dispatch<React.SetStateAction<boolean>>;

export interface productCartStateType {
  productsCart: productCartType[];
  grandTotalCheckoutPay: number;
  setShowCart: setStateType;
  addProductToCart: (product: productCartType) => void;
  handleQuantityCartProduct: (quantity: number, productName: string) => void;
  removeAllCartProducts: () => void;
  addSetShowCartFunction: (setShowCart: setStateType) => void;
  setGrandTotalCheckoutPay: (price: number) => void;
}
