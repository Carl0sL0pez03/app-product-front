import { IPaymentDetails, SET_PAYMENT_DETAILS } from "../types/paymentTypes";

export const setPaymentDetails = (paymentDetails: IPaymentDetails) => ({
  type: SET_PAYMENT_DETAILS,
  payload: paymentDetails,
});
