import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { fetchProducts } from "../store/actions/productActions";
import "./styles/ProductPage.css";

function ProductPage() {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="loading">Cargando producto(s)...</div>;
  if (error) return <div className="error">Error: {error}...</div>;

  return (
    <div className="product-page">
      <h1 className="title">Productos</h1>
      <div className="product-grid">
        {products?.map((product) => (
          <div key={product?._id} className="product-card">
            <img
              src={product?.urlImg}
              alt={product?.name}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">{product?.name}</h2>
              <p className="product-price">${product?.price}</p>
              <p className="product-stock">Stock: {product?.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
