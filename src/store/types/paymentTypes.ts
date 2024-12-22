export interface IPaymentDetails {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  direction?: string;
}

export interface PaymentSummaryState {
  products: { _id?: string; name?: string; price?: number }[];
  total?: number;
  fees?: { base?: number; delivery?: number };
  paymentDetails?: IPaymentDetails
}

export const SET_PAYMENT_DETAILS = "SET_PAYMENT_DETAILS";
