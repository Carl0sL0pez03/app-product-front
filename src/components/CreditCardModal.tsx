import React, { ChangeEvent } from "react";

import { useForm } from "react-hook-form";

import {
  ICreditCardFormData,
  ICreditCardModalProps,
} from "./types/creditCardTypes";
import useCreditCardValidation from "../hook/useCreditCardValidation";
import { MASTERCARD, VISA } from "../store/types/cartTypes";

import "./styles/CreditCardModal.css";

function CreditCardModal({ onClose, onSubmit }: ICreditCardModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid: validForm },
    setError,
    setValue,
    clearErrors,
  } = useForm({
    mode: "all",
  });

  const {
    validateCardNumber,
    validateExpiryDate,
    validateCVV,
    cardType,
    isValid,
  } = useCreditCardValidation();

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    const cleanedValue = value.replace(/\s+/g, "");
    const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ").trim();

    setValue("cardNumber", formattedValue);

    validateCardNumber(cleanedValue);

    if (!isValid) {
      setError("cardNumber", {
        type: "manual",
        message: "Número de tarjeta inválido.",
      });
    } else {
      clearErrors("cardNumber");
    }
  };

  const handleExpiryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    const formattedValue = value
      .replace(/[^0-9/]/g, "")
      .replace(/^(0[1-9]|1[0-2])$/, "$1/")
      .replace(/\/\//g, "/");

    setValue("expiryDate", formattedValue);

    if (!validateExpiryDate(formattedValue)) {
      setError("expiryDate", {
        type: "manual",
        message: "Fecha de expiración inválida.",
      });
    } else {
      clearErrors("expiryDate");
    }
  };

  const handleCvvChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    if (!validateCVV(value, cardType!)) {
      setError("cvv", { type: "manual", message: "CVV inválido." });
      return;
    } else {
      clearErrors("cvv");
    }
  };

  const handleFormSubmit = (data: ICreditCardFormData) => {
    console.log(data);

    /* onSubmit(data);
    onClose(); */
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="modal-form">
          <h2 className="modal-title">Información de pago</h2>

          <label htmlFor="cardNumber">Número de la tarjeta</label>
          <div className="input-container">
            <input
              {...register("cardNumber", {
                required: "El número de la tarjeta es obligatorio",
              })}
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              onChange={handleCardNumberChange}
            />
            <div className="card-logo">
              {cardType === VISA && (
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg"
                  alt="Visa"
                />
              )}
              {cardType === MASTERCARD && (
                <img
                  src="https://th.bing.com/th/id/OIP.zeRTxpEsrjvlKPWbIlwwagHaEK?rs=1&pid=ImgDetMain"
                  alt="MasterCard"
                />
              )}
            </div>
          </div>

          {errors?.cardNumber && (
            <p className="error">Introduzca un número de tarjeta válido.</p>
          )}

          <label htmlFor="expiryDate">Fecha de expiración</label>
          <input
            {...register("expiryDate", {
              required: "La fecha de expiración es obligatoria",
            })}
            name="expiryDate"
            onChange={handleExpiryDateChange}
          />
          {errors?.expiryDate && (
            <p className="error">Introduzca una fecha de expiración valida.</p>
          )}

          <label htmlFor="cvv">CVV</label>
          <input
            {...register("cvv", { required: "El CVV es obligatorio" })}
            name="cvv"
            type="password"
            onChange={handleCvvChange}
          />
          {errors?.cvv && <p className="error">Introduzca un CVV válido.</p>}

          <label htmlFor="direction">Dirección</label>
          <input
            {...register("direction", {
              required: "La dirección es obligatoria.",
            })}
            name="direction"
          />

          <button
            type="submit"
            className="checkout-button"
            disabled={!validForm}
          >
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
