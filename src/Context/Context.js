import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prev) => !prev);

  const addItem = (item, quantity) => {
    if (cartItems.some((product) => product.id === item.id)) {
      const copy = [...cartItems];
      const repeatItemIndex = cartItems.findIndex(
        (product) => product.id === item.id
      );
      copy[repeatItemIndex] = {
        ...copy[repeatItemIndex],
        quantity: copy[repeatItemIndex].quantity + quantity,
      };

      setCartItems(copy);
      setCartCount((prev) => prev + quantity);
      setShow((prev) => !prev);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
      setCartCount((prev) => prev + quantity);
      setShow((prev) => !prev);
    }
  };

  /*  const deleteItem = (item) =>
    cartItems.filter((product) => product.id !== item.id); //función incompleta */

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addItem, show, handleShow }}
    >
      {children}
    </CartContext.Provider>
  );
};
