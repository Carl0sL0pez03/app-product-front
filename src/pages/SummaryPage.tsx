import React from "react";

import { useSelector } from "react-redux";

import { ISummaryPageProps } from "./types/summaryTypes";
import { RootState } from "../store/store";

function SummaryPage({ onConfirmPayment }: ISummaryPageProps) {
  const { products, total, fees } = useSelector(
    (state: RootState) => state.paymentSummary
  );

  return (
    <div className="summary-container">
      <h1 className="summary-title">Resumen de pagos</h1>
      <ul className="product-list">
        {products?.map((product) => (
          <li key={product?._id} className="product-item">
            {product?.name} - ${product?.price}
          </li>
        ))}
      </ul>
      <div className="fees-container">
        <p>
          Cuota base: <span className="fee">{fees?.base}</span>
        </p>
        <p>
          Tasa de entrega: <span className="fee">{fees?.delivery}</span>
        </p>
      </div>
      <p className="total">
        Total: <span className="total-amount">${total}</span>
        <button onClick={onConfirmPayment} className="confirm-button">
          Confirmar Pago
        </button>
      </p>
    </div>
  );
}

export default SummaryPage;
