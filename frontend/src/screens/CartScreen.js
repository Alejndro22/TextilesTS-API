import React from "react";
import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerSell } from "../redux/actions/cartActions";

//import { addListener } from '../../../backend/models/Inventario';

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartArray = [];

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (precio, item) => item.precio * item.qty + precio,
      0
    );
  };

  const showHandler = async () => {
    // eslint-disable-next-line
    cartItems.map((item) => {
      cartArray.push({
        idProducto: item.producto,
        cantidad: parseInt(item.qty),
        precio: item.precio,
      });
    });
    const response = await registerSell(
      cartArray,
      getCartSubTotal().toFixed(2)
    );
    removeItems();
  };

  const removeItems = () => {
    // eslint-disable-next-line
    cartItems.map((item) => {
      removeHandler(item.producto);
    });
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Carro de compras</h2>
        {cartItems.length === 0 ? (
          <div>
            Su carrito esta vacio <Link to="/">Regresar</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.producto}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>SubTotal ({getCartCount()}) items</p>
          <p>Q{getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button type="button" onClick={showHandler}>
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
