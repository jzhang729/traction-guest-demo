import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Pane, Paragraph, Strong } from "evergreen-ui";
import PriceDisplay from "./PriceDisplay";
import slugify from "slugify";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";

const ProductCardWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #edf0f2;
  width: 90%;

  @media (min-width: 600px) {
    width: 40%;
  }

  @media (min-width: 800px) {
    width: 30%;
  }
`;

const ProductCard = ({ product }) => {
  const { isCartVisible, setIsCartVisible, cartItems, setCartItems, addToCart } = useContext(
    CartContext
  );

  const handleAddExistingItem = (item, index) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const updatedCart = Object.assign([], cartItems, { [index]: updatedItem });
    setCartItems(updatedCart);
  };

  const handleAddToCart = product => {
    let itemAlreadyInCart = cartItems.find(item => item.sku === product.sku);

    if (itemAlreadyInCart) {
      handleAddExistingItem(itemAlreadyInCart, cartItems.indexOf(itemAlreadyInCart));
    } else {
      addToCart(product);
    }

    if (!isCartVisible) {
      setIsCartVisible(true);
    }
  };

  return (
    <ProductCardWrapper>
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

      <Pane marginTop="1rem" flex="1 1 auto">
        <Paragraph>
          <Strong size={400}>{product.name}</Strong>
        </Paragraph>
        <PriceDisplay regularPrice={product.regularPrice} salePrice={product.salePrice} />
      </Pane>

      <Pane display="flex" alignItems="center">
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/products/${slugify(product.name, { lower: true, remove: /"/g })}`,
            state: { sku: product.sku }
          }}
        >
          <Button height={40} intent="none" marginY="0.5rem" marginRight="0.5rem">
            Investigate
          </Button>
        </Link>

        <Button
          appearance="primary"
          intent="none"
          color="#ffffff"
          marginY="0.5rem"
          marginRight="0.5rem"
          height={40}
          onClick={() => handleAddToCart(product)}
        >
          Loot Item
        </Button>
      </Pane>
    </ProductCardWrapper>
  );
};

export default ProductCard;
