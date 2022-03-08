import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let itemQuantity = { ...item, quantity };
        if (isInCart(item.id) {
            setCart([...cart, itemQuantity]);
        } else {
            conconst 
        }
    }

}
    return (
      
    <div>CartContext</div>
  )
}
