import { useState, useEffect } from "react";

const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(
    () => {
      setCartTotal(getUpdatedTotal());
    },
    [cartItems]
  );

  const getFinalSalePrice = ({ salePrice, regularPrice }) => {
    return salePrice && regularPrice ? parseFloat(salePrice) : parseFloat(regularPrice);
  };

  const getUpdatedTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = getFinalSalePrice(item);
      return Number((parseFloat(total) + parseFloat(price) * parseFloat(item.quantity)).toFixed(2));
      // console.log({ value });
      // return value;
    }, 0);
  };

  const addToCart = product => {
    // Adding an item to cart where there was none before
    const productWithQuantity = { ...product, quantity: 1 };
    setCartItems([...cartItems, productWithQuantity]);
  };

  const findIndexOfItemInCart = product => {
    return cartItems.indexOf(cartItems.find(item => item.sku === product.sku));
  };

  const incrementQuantity = (product, amountToIncrement = 1) => {
    const index = findIndexOfItemInCart(product);
    const updatedItem = { ...product, quantity: product.quantity + amountToIncrement };

    // const updatedCart = Object.assign([], cartItems, { [index]: updatedItem });
    // const updatedCart = [...cartItems, { [index]: updatedItem }];
    const updatedCart = [
      ...Array.prototype.slice.call(cartItems, 0, index),
      updatedItem,
      ...Array.prototype.slice.call(cartItems, index + 1)
    ];
    setCartItems(updatedCart);
  };

  const decrementQuantity = (product, amountToDecrement = 1) => {
    const index = findIndexOfItemInCart(product);
    const updatedItem = { ...product, quantity: product.quantity - amountToDecrement };

    if (updatedItem.quantity <= 0) {
      const index = findIndexOfItemInCart(updatedItem);
      console.log("Remove the item from cart", index, cartItems);
      const updatedCart = [
        ...Array.prototype.slice.call(cartItems, 0, index),
        ...Array.prototype.slice.call(cartItems, index + 1)
      ];
      console.log({ updatedItem });
      setCartItems(updatedCart);
    } else {
      const updatedCart = Object.assign([], cartItems, { [index]: updatedItem });
      setCartItems(updatedCart);
    }
  };

  return {
    addToCart,
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
