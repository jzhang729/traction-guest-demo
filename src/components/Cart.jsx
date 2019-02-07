import React, { Fragment, useContext } from "react";
import { Button, Heading, Pane, Icon } from "evergreen-ui";
import { Paragraph } from "evergreen-ui";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import CartContext from "../contexts/CartContext";
import { Overlay } from "../styles/global";
import { getProductPrice } from "../utils/cartFunctions";

const CartStyle = styled.div`
  position: fixed;
  background-color: #ffffff;
  z-index: 3;
  padding: 1rem;
  opacity: 1;
  height: 100vh;
  box-shadow: 0.25rem 0 1rem #333333;

  @media (min-width: 400px) {
    right: 100px;
    width: 100%;
    width: 500px;
  }
`;

const Cart = () => {
  const { isCartVisible, setIsCartVisible, cartItems, cartTotal } = useContext(CartContext);

  const submitCart = () => {
    console.log("Submitting cart");
  };

  // const renderCartItems = cartItems => {
  //   for (const item of cartItems) {
  //     return <div key={item.sku}>{item.name}</div>;
  //   }
  // };

  return (
    <Fragment>
      {isCartVisible ? <Overlay onClick={() => setIsCartVisible(false)} /> : null}
      <Motion
        defaultValue={{ x: 140, opacity: 0 }}
        style={{
          x: spring(isCartVisible ? 25 : 140),
          opacity: spring(isCartVisible ? 1 : 0)
        }}
      >
        {style => {
          return (
            <CartStyle
              style={{
                transform: `translateX(${style.x}%)`,
                opacity: style.opacity
              }}
            >
              <Pane display="flex" flexDirection="column" height="100%" paddingX="1rem">
                <Pane display="flex" justifyContent="flex-end">
                  <Icon
                    cursor="pointer"
                    icon="cross"
                    size={32}
                    onClick={() => {
                      setIsCartVisible(false);
                    }}
                  />
                </Pane>
                <Pane paddingTop="1rem" paddingBottom="1rem" flex="1 0 auto" maxWidth="90%">
                  {cartItems.map((item, index) => {
                    return (
                      <Pane key={index} marginBottom="1rem">
                        <Pane display="flex" justifyContent="space-between">
                          <img src={item.thumbnailImage} alt={item.name} />
                          <Heading size={500} marginX="0.5rem">
                            {item.name}
                          </Heading>
                        </Pane>

                        <Pane>${getProductPrice(item)}</Pane>
                        <Pane>{item.quantity}</Pane>
                      </Pane>
                    );
                  })}
                  {/* {renderCartItems(cartItems)} */}
                </Pane>
                <Paragraph>Total: ${cartTotal}</Paragraph>
                <Pane display="flex" justifyContent="center">
                  <Button
                    appearance="primary"
                    intent="success"
                    color="#ffffff"
                    marginRight={12}
                    height={40}
                    onClick={() => submitCart()}
                  >
                    Load Aboard
                  </Button>
                </Pane>
              </Pane>
            </CartStyle>
          );
        }}
      </Motion>
    </Fragment>
  );
};

export default Cart;
