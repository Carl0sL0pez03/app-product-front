import React from "react";

import { useForm } from "react-hook-form";

import "./styles/CreditCardModal.css";
import {
  ICreditCardFormData,
  ICreditCardModalProps,
} from "./types/creditCardTypes";

function CreditCardModal({ onClose, onSubmit }: ICreditCardModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmite = (data: ICreditCardFormData) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit(handleFormSubmite)} className="modal-form">
          <h2 className="modal-title">Información de pago</h2>

          <label htmlFor="cardNumber">Número de la tarjeta</label>
          <input
            {...register("cardNumber", { required: true, pattern: /^\d{16}$/ })}
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
          />
          {errors?.cardNumber && (
            <p className="error">Introduzca un número de tarjeta válido.</p>
          )}

          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            {...register("expiryDate", { required: true })}
            name="expiryDate"
          />
          {errors?.expiryDate && <p>Es un campo requerido.</p>}

          <label htmlFor="cvv">CVV</label>
          <input
            {...register("cvv", { required: true, pattern: /^\d{3}$/ })}
            name="cvv"
            type="password"
          />
          {errors?.cvv && <p>Introduzca un CVV válido.</p>}

          <button type="submit" className="checkout-button">
            Pagar
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreditCardModal;
