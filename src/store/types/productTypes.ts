export interface IProduct {
  _id?: string;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  urlImg?: string;
  quantity?: number;
}

export interface IProductState {
  products?: IProduct[];
  loading?: boolean;
  error?: string | null;
}

export interface ICartProduct {
  cartItems?: IProduct[];
}

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const UPDATE_STOCK = "UPDATE_STOCK";

interface IFetchProductsRequestAction {
  type?: typeof FETCH_PRODUCTS_REQUEST;
}

interface IFetchProductsSuccessAction {
  type?: typeof FETCH_PRODUCTS_SUCCESS;
  payload?: IProduct[];
}

interface IFetchProductsFailureAction {
  type?: typeof FETCH_PRODUCTS_FAILURE;
  payload?: string;
}

interface IUpdateStockAction {
  type?: typeof UPDATE_STOCK;
  payload?: { productId?: string; newStock?: number };
}

export type ProductActionTypes =
  | IFetchProductsRequestAction
  | IFetchProductsSuccessAction
  | IFetchProductsFailureAction
  | IUpdateStockAction;
