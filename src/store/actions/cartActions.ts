import { IProduct } from "../types/productTypes";
import localforage from "../../localForageConfig";
import { AppThunk } from "../store";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../types/cartTypes";

export const addToCart =
  (product: IProduct): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });

    await localforage.setItem("cartItems", getState()?.cart?.cartItems);
  };

export const removeFromCart =
  (productId: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });

    await localforage.setItem("cartItems", getState().cart.cartItems);
  };

export const updateCartQuantity =
  (productId: string, quantity: number): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: { productId, quantity },
    });

    await localforage.setItem("cartItems", getState().cart.cartItems);
  };
