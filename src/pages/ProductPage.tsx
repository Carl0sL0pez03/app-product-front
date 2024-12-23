import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { fetchProducts } from "../store/actions/productActions";
import { IProduct } from "../store/types/productTypes";
import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../store/actions/cartActions";

import "./styles/ProductPage.css";
import { formatCurrency } from "../utils/formatCurrency";

function ProductPage() {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );
  const cartItems = useSelector((state: RootState) => state?.cart?.cartItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: IProduct) => {
    const currentQuantity =
      cartItems?.find((item) => item?._id === product?._id)?.quantity || 0;

    dispatch(addToCart({ ...product, quantity: currentQuantity + 1 }));
  };

  const adjustQuantity = (productId: string, amount: number) => {
    const currentQuantity =
      cartItems?.find((item) => item?._id === productId)?.quantity || 0;

    const updatedQuantity = Math.max(0, currentQuantity + amount);

    if (updatedQuantity > 0) {
      dispatch(updateCartQuantity(productId, updatedQuantity));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

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
              <p className="product-price">{formatCurrency(product?.price!)}</p>
              <p className="product-stock">Existencias: {product?.stock}</p>
              {cartItems?.find((item) => item?._id === product?._id) ? (
                <div className="quantity-control">
                  <button onClick={() => adjustQuantity(product?._id!, -1)}>
                    -
                  </button>
                  <span>
                    {
                      cartItems?.find((item) => item?._id === product?._id)
                        ?.quantity
                    }
                  </span>
                  <button onClick={() => adjustQuantity(product?._id!, 1)}>
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn"
                >
                  Agregar al Carrito
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
