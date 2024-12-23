import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { ISummaryPageProps } from "./types/summaryTypes";
import { RootState } from "../store/store";

import "./styles/SummaryPage.css";
import { formatCurrency } from "../utils/formatCurrency";
import { ITransaction } from "src/utils/type/transactionTypes";

function SummaryPage({}: ISummaryPageProps) {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const { paymentDetails } = useSelector(
    (state: RootState) => state.paymentSummary
  );

  const { cartItems, total, fees } = useSelector(
    (state: RootState) => state.cart
  );

  const handleButtonToHome = () => {
    navigate("/");
  };

  const handleConfirmPayment = async () => {
    try {
      const apiBaseUrl = process.env.REACT_APP_URL_API;
      const transactionData: ITransaction = {
        products: cartItems?.map(({ _id, name }) => ({ _id, name })),
        valueProducts: total,
        creatorName: user?.name || user?.email,
        paymentDetails
      };
      const response = await axios.post(
        `${apiBaseUrl}/api/transactions/create`,
        transactionData
      );
      console.log("transac", response);

      navigate("/result");
    } catch (error) {
      console.error("Error al crear la transacción: ", error);
    }
  };

  return (
    <div>
      <h1 className="title">Resumen de pagos</h1>
      <div className="summary-container">
        <ul className="product-list">
          {cartItems?.map((product) => (
            <li key={product?._id} className="product-item">
              <img
                src={product?.urlImg}
                alt={product?.name}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-name">{product?.name}</h2>
                <p className="product-price">
                  Precio: {formatCurrency(product?.price!)}
                </p>
                <p className="product-quantity">
                  Cantidad: ${product?.quantity}
                </p>
                <p className="product-subtotal">
                  Subtotal:{" "}
                  {formatCurrency(product?.price! * product?.quantity!)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="fees-container">
          <p>
            Cuota base:{" "}
            <span className="fee">{formatCurrency(fees?.base!)}</span>
          </p>
          <p>
            Tasa de entrega:{" "}
            <span className="fee">{formatCurrency(fees?.delivery!)}</span>
          </p>
        </div>
        <p className="total">
          Total: <span className="total-amount">{formatCurrency(total!)}</span>
          <button onClick={handleConfirmPayment} className="checkout-button">
            Confirmar Pago
          </button>
          <button onClick={handleButtonToHome} className="cancel-button">
            Cancelar
          </button>
        </p>
      </div>
    </div>
  );
}

export default SummaryPage;
