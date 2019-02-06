import { useState } from "react";

const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return { isCartVisible, setIsCartVisible };
};

export default useCart;
