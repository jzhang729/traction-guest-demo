import React, { Fragment, useContext } from "react";
import { Button, Card, Heading, Pane, SideSheet } from "evergreen-ui";
import { Paragraph } from "evergreen-ui";
import CartContext from "../contexts/CartContext";
import { getProductPrice } from "../utils/cartFunctions";

const Cart = () => {
  const { isCartVisible, setIsCartVisible, cartItems, cartTotal } = useContext(CartContext);

  const submitCart = () => {
    console.log("Submitting cart");
  };

  return (
    <Fragment>
      <SideSheet
        isShown={isCartVisible}
        preventBodyScrolling
        onCloseComplete={() => setIsCartVisible(false)}
        width={400}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Title</Heading>
            <Paragraph size={400}>Optional description or sub title</Paragraph>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          {cartItems.map((item, index) => {
            return (
              <Card
                key={index}
                backgroundColor="white"
                elevation={0}
                marginBottom="1rem"
                padding="1rem"
              >
                <Pane display="flex" justifyContent="space-between">
                  <img src={item.thumbnailImage} alt={item.name} />
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
          })}
        </Pane>

        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Paragraph marginX="auto" paddingY="1rem" display="flex" justifyContent="center">
              Total: ${cartTotal}
            </Paragraph>
            <Button
              appearance="primary"
              intent="success"
              color="#ffffff"
              marginRight={12}
              height={40}
              onClick={() => submitCart()}
              width="50%"
              marginX="auto"
              display="flex"
              justifyContent="center"
            >
              Load Aboard
            </Button>
          </Pane>
        </Pane>
      </SideSheet>
    </Fragment>
  );
};

export default Cart;
