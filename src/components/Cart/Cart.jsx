import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    isCheckoutVisible,
    setIsCheckoutVisible,
  } = useContext(CartContext);

  const handleFinishPurchase = () => {
    setShowCheckoutForm(true);
  };

  const handleClearCart = () => {
    clearCart();
    setShowCheckoutForm(false);
  };

  const handleConfirmPurchase = () => {
    clearCart();
    setShowCheckoutForm(false);
  };

  // CALCULAR PRECIO TOTAL DE LOS PRODUCTOS EN EL CARRITO
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <>
          {/* MOSTRAR PRODUCTOS EN EL CARRITO */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt="{item.name}"
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))}
          {/* MOSTRAR PRECIO TOTAL */}
          <div className="mt-3">
            <h4>Total: ${totalPrice}</h4>
          </div>

          <div className="cart-buttons">
            {/* BOTON PARA VACIAR CARRITO */}
            <button className="btn btn-danger mt-3" onClick={clearCart}>
              Vaciar Carrito
            </button>

            {/* BOTON PARA FINALIZAR COMPRA */}
          </div>
          <button
            className="btn btn-warning"
            onClick={() => setIsCheckoutVisible(!isCheckoutVisible)}
          >
            Finalizar Compra
          </button>

          {/* FORMULARIO DE COMPRA */}
          {isCheckoutVisible && <CheckoutForm />}
        </>
      )}
    </>
  );
};

export default Cart;
