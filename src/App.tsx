import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ProductPage, SummaryPage } from "./pages";
import { NavBar } from "./components";
import localforage from "./localForageConfig";
import { SET_CART_ITEMS } from "./store/types/cartTypes";

import "./styles.css";
import Authenticate from "./components/Authenticate";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCart() {
      const cartItems = (await localforage.getItem("cartItems")) || [];
      dispatch({ type: SET_CART_ITEMS, payload: cartItems });
    }

    loadCart();
  }, [dispatch]);

  return (
    <Router>
      <Authenticate>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Authenticate>
    </Router>
  );
};

export default App;
