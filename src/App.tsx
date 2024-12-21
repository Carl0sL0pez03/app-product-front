import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages";
import { NavBar } from "./components";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
