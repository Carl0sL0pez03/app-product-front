import { IProduct } from "../types/productTypes";

export function calculateTotals(cartItems: IProduct[]) {
  const total =
    cartItems?.reduce((acc, item) => acc + item?.price! * item?.quantity!, 0) ||
    0;

  const fees = {
    base: 2000,
    delivery: total > 200000 ? 0 : 15000,
  };

  return { total, fees };
}
