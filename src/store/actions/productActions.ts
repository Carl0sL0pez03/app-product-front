import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../types/productTypes";

import axios from "axios";

import { AppThunk } from "../store";
import { UPDATE_STOCK } from "../types/productTypes";

export const fetchProducts = (): AppThunk => async (dispatch) => {
  const apiBaseUrl = process.env.REACT_APP_URL_API;
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  try {
    const response = {
      data: await axios.get(`${apiBaseUrl}/api/products/getAll`),
    };

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response?.data?.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error,
    });
  }
};

export const updateStock = (productId: string, newStock: number) => ({
  type: UPDATE_STOCK,
  payload: { productId, newStock },
});
