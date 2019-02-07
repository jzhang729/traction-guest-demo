import React, { Fragment, useContext } from "react";
import { Button, Heading, Pane, SideSheet, Text } from "evergreen-ui";
import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";

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
          <Pane padding="2rem">
            <Heading size={500}>Pirate Ship</Heading>
          </Pane>
        </Pane>

        {/*  Cart Items Div */}
        <Pane flex="1" overflowY="scroll" background="tint1" padding="2rem">
          {cartItems.map((item, index) => {
            return <CartItem item={item} index={index} key={index} />;
          })}
        </Pane>

        {/* Checkout Div */}
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding="2rem">
            <Pane marginX="auto" paddingY="1rem" display="flex" justifyContent="center">
              <Text>Total:</Text>{" "}
              <Heading marginX="0.5rem" size={600}>
                ${cartTotal}
              </Heading>
            </Pane>
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
