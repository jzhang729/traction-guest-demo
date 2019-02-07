import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Pane, Paragraph, Strong } from "evergreen-ui";
import PriceDisplay from "./PriceDisplay";
import slugify from "slugify";
import CartContext from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  return (
    <Pane
      margin="1rem"
      padding="1rem"
      maxWidth="30%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="muted"
      onMouseEnter={() => console.log("mouse entered")}
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
        <Button
          appearance="primary"
          intent="none"
          color="#ffffff"
          marginRight={12}
          height={40}
          onClick={() => (isCartVisible ? null : setIsCartVisible(true))}
        >
          Load Aboard th' Vessel
        </Button>
      </Pane>
    </Pane>
  );
};

export default ProductCard;
