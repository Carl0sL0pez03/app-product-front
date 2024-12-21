import { AnyAction } from "redux";

import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  IProductState,
  UPDATE_STOCK,
} from "../types/productTypes";

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export function productReducer(
  state: IProductState = initialState,
  action: AnyAction
): IProductState {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      if ("payload" in action && Array.isArray(action?.payload)) {
        return {
          ...state,
          loading: false,
          products: action?.payload,
          error: null,
        };
      }
      break;
    case FETCH_PRODUCTS_FAILURE:
      if ("payload" in action && typeof action?.payload === "string") {
        return {
          ...state,
          loading: false,
          error: action?.payload,
        };
      }
      break;
    case UPDATE_STOCK:
      if (
        "payload" in action &&
        typeof action.payload === "object" &&
        action.payload !== null &&
        "productId" in action?.payload &&
        "newStock" in action?.payload
      ) {
        return {
          ...state,
          products: state?.products?.map((product) =>
            product._id === action?.payload?.productId
              ? { ...product, stock: action?.payload?.newStock }
              : product
          ),
        };
      }
      break;
    default:
      return state;
  }
  return state;
}
