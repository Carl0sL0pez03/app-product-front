import { AnyAction } from "redux";

import {
  PaymentSummaryState,
  SET_PAYMENT_DETAILS,
} from "../types/paymentTypes";

const initialState: PaymentSummaryState = {
  products: [],
  total: 0,
  fees: { base: 0, delivery: 0 },
  paymentDetails: {
    cardNumber: "",
    cvv: "",
    direction: "",
    expiryDate: "",
  },
};

export function paymentSummaryReducer(
  state = initialState,
  action: AnyAction
): PaymentSummaryState {
  switch (action.type) {
    case SET_PAYMENT_DETAILS:
      return { ...state, paymentDetails: action?.payload };
    default:
      return state;
  }
}
