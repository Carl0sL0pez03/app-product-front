import React from "react";

import { useLocation } from "react-router-dom";

import "./styles/ResultPage.css";

function ResultPage() {
  const location = useLocation();
  const { result } = location?.state || {
    result: "Faltan detalles de la transacción.",
  };

  return (
    <div className="result-container">
      <h1 className="result-title">Resultado de la transacción</h1>
      <p className="result-text">{result}</p>
    </div>
  );
}

export default ResultPage;
