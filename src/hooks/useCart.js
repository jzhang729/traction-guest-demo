import { useState, useEffect } from "react";
import { getFinalSalePrice } from "../utils/cartFunctions";

const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(
    () => {
      setCartTotal(getUpdatedTotal());

      if (cartItems.length === 0) {
        setIsCartVisible(false);
      }
    },
    [cartItems]
  );

  const getUpdatedTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = getFinalSalePrice(item);
      return Number((parseFloat(total) + parseFloat(price) * parseFloat(item.quantity)).toFixed(2));
    }, 0);
  };

  const incrementQuantity = (product, amountToIncrement = 1) => {
    const index = findIndexOfItemInCart(product);
    const updatedItem = { ...product, quantity: product.quantity + amountToIncrement };
    const updatedCart = [
      ...Array.prototype.slice.call(cartItems, 0, index),
      updatedItem,
      ...Array.prototype.slice.call(cartItems, index + 1)
    ];
    setCartItems(updatedCart);
  };

  const addToCart = product => {
    console.log({ product });
    const itemAlreadyInCart = cartItems.find(item => item.sku === product.sku);
    console.log({ itemAlreadyInCart });

    if (itemAlreadyInCart) {
      incrementQuantity(itemAlreadyInCart);
    } else {
      // Adding an item to cart where there was none before
      const productWithQuantity = { ...product, quantity: 1 };
      setCartItems([...cartItems, productWithQuantity]);
    }

    if (!isCartVisible) {
      setIsCartVisible(true);
    }
  };

  const findIndexOfItemInCart = product => {
    return cartItems.indexOf(cartItems.find(item => item.sku === product.sku));
  };

  const removeFromCart = product => {
    const index = findIndexOfItemInCart(product);
    const updatedCart = [
      ...Array.prototype.slice.call(cartItems, 0, index),
      ...Array.prototype.slice.call(cartItems, index + 1)
    ];
    setCartItems(updatedCart);
  };

  const decrementQuantity = (product, amountToDecrement = 1) => {
    const index = findIndexOfItemInCart(product);
    const updatedItem = { ...product, quantity: product.quantity - amountToDecrement };

    if (updatedItem.quantity <= 0) {
      removeFromCart(product);
    } else {
      const updatedCart = Object.assign([], cartItems, { [index]: updatedItem });
      setCartItems(updatedCart);
    }
  };

  return {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    isCartVisible,
    setIsCartVisible,
    cartItems,
    setCartItems,
    cartTotal,
    setCartTotal
  };
};

export default useCart;
