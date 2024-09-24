import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  // AGREGAR AL CARRITO
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // REMOVER DEL CARRITO
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // PRECIO TOTAL DEL CARRITO
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // LIMPIAR CARRITO
  const clearCart = () => {
    setCartItems([]);
    setIsCheckoutVisible(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        isCheckoutVisible,
        setIsCheckoutVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
