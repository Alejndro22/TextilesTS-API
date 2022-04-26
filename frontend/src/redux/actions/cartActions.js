import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/inventario/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      producto: data._id,
      nombre: data.nombre,
      urlImagen: data.urlImagen,
      precio: data.precio,
      existencias: data.existencias,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const registerSell = async (cart, total) => {
  const obj = {
    carrito: cart,
    total: Number(total),
  };

  for (const element of cart) {
    await axios.put(`/api/inventario/${element.idProducto}`, {
      existencias: element.cantidad,
    });
  }

  const registrarVenta = await axios.post(`/api/ventas`, obj);
  return registrarVenta.status;
};
