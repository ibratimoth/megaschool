import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.name === product.name);
      if (exists) {
        return prev;
      }
      return [...prev, { ...product, id: Date.now() }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

  const cartCount = cartItems.length;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};