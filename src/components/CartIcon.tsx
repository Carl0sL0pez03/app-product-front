import React from "react";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../store/store";

import "./styles/CartIcon.css";

export default function CartIcon() {
  const cartItems = useSelector((state: RootState) => state?.cart?.cartItems);

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className="cart-count">{cartItems?.length}</span>
    </div>
  );
}
