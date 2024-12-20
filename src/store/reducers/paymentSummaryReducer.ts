import { AnyAction } from "redux";

interface PaymentSummaryState {
  products: { _id?: string; name?: string; price?: number }[];
  total?: number;
  fees?: { base?: number; delivery?: number };
}

const initialState: PaymentSummaryState = {
  products: [],
  total: 0,
  fees: { base: 0, delivery: 0 },
};

export function paymentSummaryReducer(
  state = initialState,
  action: AnyAction
): PaymentSummaryState {
  switch (action.type) {
    default:
      return state;
  }
}
