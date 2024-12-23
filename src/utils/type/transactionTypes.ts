import { IPaymentDetails } from "src/store/types/paymentTypes";
import { IProduct } from "src/store/types/productTypes";

export interface ITransaction {
  _id?: string;
  products?: IProduct[];
  valueProducts?: number;
  numberTransaction?: string;
  creatorName?: string;
  createdAt?: Date;
  state?: number;
  wasSuccessfulPayment?: boolean;
  paymentDetails?: IPaymentDetails;
}
