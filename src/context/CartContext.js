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
      qty += 1;
    }
  };

  const deleteOne = (id) => {
    const filteredProducts = cart.filter((prod) => prod.id !== id);
    setCart(filteredProducts);
  };

  const sumPrice = (cart) => {
    let price = 0;
    cart.forEach((prod) => {
      price += prod.qty * prod.price;
    });
    return price;
  };

  const qty = (cart) => {
    return cart.length;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, deleteOne, qty, sumPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
