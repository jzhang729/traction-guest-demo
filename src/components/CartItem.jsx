import React, { useContext } from "react";
import { Card, Heading, Icon, Paragraph, Pane, UnorderedList, ListItem } from "evergreen-ui";
import { getFinalSalePrice } from "../utils/cartFunctions";
import CartContext from "../contexts/CartContext";

const CartItem = ({ item, index }) => {
  const { decrementQuantity, incrementQuantity, removeFromCart } = useContext(CartContext);

  return (
    <Card backgroundColor="white" elevation={0} marginBottom="1rem" padding="1rem">
      {/* Top Part */}
      <Pane display="flex" justifyContent="space-between">
        <Pane flex="1 1 auto">
          <img src={item.thumbnailImage} alt={item.name} />
        </Pane>
        <Pane flex="0 1 70%" marginX="0.5rem">
          <Paragraph>{item.name}</Paragraph>
        </Pane>
      </Pane>

      {/* Bottom Part */}
      <Pane marginTop="1rem" display="flex" justifyContent="space-between">
        <Pane>
          <Heading size={200}>Price: ${getFinalSalePrice(item)}</Heading>
          <Heading size={200}>Quantity: {item.quantity}</Heading>
        </Pane>
        <Pane>
          <Icon
            color="muted"
            cursor="pointer"
            size={32}
            icon="plus"
            onClick={() => incrementQuantity(item)}
          />
          <Icon
            color="muted"
            cursor="pointer"
            size={32}
            icon="minus"
            onClick={() => decrementQuantity(item)}
          />
        </Pane>
      </Pane>
      <UnorderedList>
        <ListItem
          color="#EC4C47"
          icon="ban-circle"
          cursor="pointer"
          onClick={() => removeFromCart(item)}
        >
          Remove
        </ListItem>
      </UnorderedList>
    </Card>
  );
};

export default CartItem;
