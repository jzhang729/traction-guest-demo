import { useState } from "react";

const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return { isCartVisible, setIsCartVisible, cartItems, setCartItems, cartTotal, setCartTotal };
};

export default useCart;
