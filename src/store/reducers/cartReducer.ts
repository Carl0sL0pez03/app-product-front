import { AnyAction } from "redux";

import { ICartProduct, IProduct } from "../types/productTypes";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
  UPDATE_CART_QUANTITY,
} from "../types/cartTypes";

const initialState: ICartProduct = {
  cartItems: [],
};

export function cartReducer(
  state = initialState,
  action: AnyAction
): ICartProduct {
  switch (action?.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state?.cartItems!, action?.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state?.cartItems?.filter(
          (item: IProduct) => item?._id !== action?.payload
        ),
      };
    case UPDATE_CART_QUANTITY:
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
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
}
