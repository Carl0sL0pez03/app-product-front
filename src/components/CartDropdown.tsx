import React, { useState } from "react";

import { useSelector } from "react-redux";

import { RootState } from "../store/store";

import "./styles/CartDropdown.css";
import CreditCardModal from "./CreditCardModal";

export default function CartDropdown() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state?.cart?.cartItems);

  const isEmpty = cartItems?.length === 0;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {isEmpty ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cartItems?.map((item) => (
            <div key={item?._id} className="cart-item">
              <img
                src={item?.urlImg}
                alt={item?.name}
                style={{ width: "50px" }}
              />
              <span>
                {item?.name} - ${item?.price} x {item?.quantity}
              </span>
            </div>
          ))
        )}
      </div>
      <button
        className="checkout-button"
        onClick={() => setIsModalOpen(true)}
        disabled={isEmpty}
      >
        Pagar con tarjeta
      </button>
      {isModalOpen && (
        <CreditCardModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={() => console.log("Proceso de pago")}
        />
      )}
    </div>
  );
}
