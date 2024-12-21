import { IProduct } from "../types/productTypes";

export const addToCart = (product: IProduct) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId: string) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: { productId, quantity },
  };
};
