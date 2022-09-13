import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function isInCart(item) {
    return cart.find((i) => i.id === item.id);
  }

  const addToCart = (item, quantity) => {
    if (isInCart(item)) {
      alert("Ya está en el carrito");
    } else {
      setCart([...cart, { ...item, qty: quantity }]);
    }
  };

  console.log(cart);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
