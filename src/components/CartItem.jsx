import React from "react";
import { Card, Heading, Pane } from "evergreen-ui";
import { getProductPrice } from "../utils/cartFunctions";

const CartItem = ({ item, index }) => {
  return (
    <Card backgroundColor="white" elevation={0} marginBottom="1rem" padding="1rem">
      <Pane display="flex" justifyContent="space-between">
        <Pane>
          <img src={item.thumbnailImage} alt={item.name} />
        </Pane>
        <Heading size={400} marginX="0.5rem">
          {item.name}
        </Heading>
      </Pane>
      <Pane marginTop="1rem">
        <Heading size={200}>Price: ${getProductPrice(item)}</Heading>
        <Heading size={200}>Quantity: {item.quantity}</Heading>
      </Pane>
    </Card>
  );
};

export default CartItem;
