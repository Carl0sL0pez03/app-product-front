import { AnyAction } from "redux";

import { ICartProduct, IProduct } from "../types/productTypes";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
  UPDATE_CART_QUANTITY,
} from "../types/cartTypes";
import { calculateTotals } from "../function/calculateTotals";

const initialState: ICartProduct = {
  cartItems: [],
};

export function cartReducer(
  state = initialState,
  action: AnyAction
): ICartProduct {
  let updatedCartItems = [...state?.cartItems!];

  switch (action.type) {
    case ADD_TO_CART:
      updatedCartItems = [...updatedCartItems, action?.payload];
      break;
    case REMOVE_FROM_CART:
      updatedCartItems = updatedCartItems?.filter(
        (item: IProduct) => item?._id !== action?.payload
      );
      break;
    case UPDATE_CART_QUANTITY:
      updatedCartItems = updatedCartItems
        ?.map((item) =>
          item?._id === action?.payload?.productId
            ? { ...item, quantity: action?.payload?.quantity }
            : item
        )
        ?.filter((item) => item?.quantity > 0);
      break;
    case SET_CART_ITEMS:
      updatedCartItems = action?.payload;
      break;
    default:
      return state;
  }

  const { total, fees } = calculateTotals(updatedCartItems);

  return {
    ...state,
    cartItems: updatedCartItems,
    total,
    fees,
  };
}
