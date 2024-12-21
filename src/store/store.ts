import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { productReducer, cartReducer, paymentSummaryReducer } from "./reducers";

const store = configureStore({
  reducer: {
    product: productReducer,
    paymentSummary: paymentSummaryReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
