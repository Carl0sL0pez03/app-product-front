import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage, ResultPage, SummaryPage } from "./pages";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
