import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartContext } from "../CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#cartOffcanvas"
        aria-controls="cartOffcanvas"
        style={{ cursor: "pointer" }}
      >
        <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i> (
        {totalQuantity})
      </div>
    </>
  );
};

export default CartWidget;
