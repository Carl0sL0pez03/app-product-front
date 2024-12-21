import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "../store/store";

import "./styles/CartIcon.css";

export default function CartIcon() {
  const cartItems = useSelector((state: RootState) => state?.cart?.cartItems);

  return (
    <div className="cart-icon">
      <img src="https://static.vecteezy.com/system/resources/previews/019/787/045/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Cart" />
      <span className="cart-count">{cartItems?.length}</span>
    </div>
  );
}
