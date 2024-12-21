import { AnyAction } from "redux";

import { ICartProduct, IProduct } from "../types/productTypes";

const initialState: ICartProduct = {
  cartItems: [],
};

export function cartReducer(
  state = initialState,
  action: AnyAction
): ICartProduct {
  switch (action?.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state?.cartItems!, action?.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state?.cartItems?.filter(
          (item: IProduct) => item?._id !== action?.payload
        ),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartItems: state?.cartItems
          ?.map((item) =>
            item?._id === action?.payload?.productId
              ? { ...item, quantity: action?.payload?.quantity }
              : item
          )
          ?.filter((item) => item?.quantity > 0),
      };
    default:
      return state;
  }
}
