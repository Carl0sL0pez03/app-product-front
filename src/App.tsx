import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
