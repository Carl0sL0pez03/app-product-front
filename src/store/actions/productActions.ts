import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../types/productTypes";
import axios from "axios";

import { AppThunk } from "../store";
import { UPDATE_STOCK } from "../types/productTypes";

export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = {
      data: [
        {
          _id: "1a2b3c4d5e",
          name: "Laptop Gamer",
          description: "Laptop de alto rendimiento con gráficos NVIDIA GTX.",
          price: 1200.99,
          stock: 15,
          urlImg:
            "https://img.freepik.com/free-photo/high-angle-gaming-setup-indoors_23-2149829123.jpg?t=st=1734639191~exp=1734642791~hmac=8904c7abb54c4adfcd736ebf09e74c8a45f70c3fa9bd0475a6473b52d0ed466b&w=740",
        },
        {
          _id: "6f7g8h9i0j",
          name: "Smartphone Pro",
          description:
            "Teléfono inteligente con pantalla OLED y 128GB de almacenamiento.",
          price: 899.99,
          stock: 25,
          urlImg:
            "https://img.freepik.com/free-vector/3d-mobile-phone-screen-light-glow-background_107791-20300.jpg?t=st=1734639122~exp=1734642722~hmac=90071cfc54c2aa3c50ae9122cc81494737f4faaf53e704a0a3b608d566399f84&w=740",
        },
        {
          _id: "2k3l4m5n6o",
          name: "Auriculares Bluetooth",
          description: "Auriculares inalámbricos con cancelación de ruido.",
          price: 199.49,
          stock: 50,
          urlImg:
            "https://img.freepik.com/free-photo/usb-flash-drive-tech-device-with-minimalist-monochrome-background-earphones_23-2150763318.jpg?t=st=1734639144~exp=1734642744~hmac=98564c707f039d5840ccda902fbc41137937c28f48416ec88acde1c3e065e7fb&w=826",
        },
        {
          _id: "7p8q9r0s1t",
          name: "Monitor Ultra HD",
          description: "Monitor 4K de 27 pulgadas para profesionales.",
          price: 349.99,
          stock: 10,
          urlImg:
            "https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757537.jpg?t=st=1734639162~exp=1734642762~hmac=d3ea88e74defe572a181dc383f11893d39348dca26bc6f502a6b9253f5191109&w=740",
        },
      ],
    }; /* await axios.get("/api/products"); */
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error,
    });
  }
};

export const updateStock = (productId: string, newStock: number) => ({
  type: UPDATE_STOCK,
  payload: { productId, newStock },
});
