import { combineReducers } from "redux";

import { paymentSummaryReducer } from "./reducers";

const rootReducer = combineReducers({
  paymentSummary: paymentSummaryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
