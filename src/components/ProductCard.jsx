import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Pane, Paragraph, Strong } from "evergreen-ui";
import PriceDisplay from "./PriceDisplay";
import slugify from "slugify";
import CartContext from "../contexts/CartContext";
import { getUpdatedTotal } from "../utils/cartFunctions";

const ProductCard = ({ product, history }) => {
  const {
    isCartVisible,
    setIsCartVisible,
    cartItems,
    setCartItems,
    cartTotal,
    setCartTotal
  } = useContext(CartContext);

  const handleAddExistingItem = (item, index) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const updatedCart = Object.assign([], cartItems, { [index]: updatedItem });
    setCartItems(updatedCart);
  };

  const handleAddToCart = product => {
    let itemAlreadyInCart = cartItems.find(item => item.sku === product.sku);

    if (itemAlreadyInCart) {
      console.log("Already have this item");
      handleAddExistingItem(itemAlreadyInCart, cartItems.indexOf(itemAlreadyInCart));
    } else {
      const productWithQuantity = { ...product, quantity: 1 };
      setCartItems([...cartItems, productWithQuantity]);
      setCartTotal(getUpdatedTotal(cartTotal, product));
    }

    if (!isCartVisible) {
      setIsCartVisible(true);
    }
  };

  return (
    <Pane
      margin="1rem"
      padding="1rem"
      maxWidth="30%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="muted"
      // onMouseEnter={() => {}} TODO: Add a focus animation if time allows
    >
      <Pane marginBottom="2rem">
        <Link
          to={{
            pathname: `/products/${slugify(product.name, { lower: true, remove: /"/g })}`,
            state: { sku: product.sku }
          }}
        >
          <img src={product.image} alt={product.name} />
        </Link>
      </Pane>
      <Pane flex="1 1 100px">
        <Paragraph>
          <Strong size={400}>{product.name}</Strong>
        </Paragraph>
        <PriceDisplay regularPrice={product.regularPrice} salePrice={product.salePrice} />
      </Pane>
      <Pane justifySelf="flex-end">
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/products/${slugify(product.name, { lower: true, remove: /"/g })}`,
            state: { sku: product.sku }
          }}
        >
          <Button height={40} intent="none" marginRight={12}>
            Investigate
          </Button>
        </Link>

        <Button
          appearance="primary"
          intent="none"
          color="#ffffff"
          marginRight={12}
          height={40}
          onClick={() => handleAddToCart(product)}
        >
          Load Aboard
        </Button>
      </Pane>
    </Pane>
  );
};

export default ProductCard;
