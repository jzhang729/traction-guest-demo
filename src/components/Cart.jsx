import React, { Fragment, useContext } from "react";
import { Paragraph } from "evergreen-ui";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import CartContext from "../contexts/CartContext";
import { Overlay } from "../styles/global";

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
    width: 400px;
  }
`;

const Cart = () => {
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

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
              <Paragraph>
                Barkadeer parrel holystone draught crack Jennys tea cup rum wench nipper rope's end
                take a caulk. Loot avast walk the plank Buccaneer yardarm barkadeer yawl keelhaul
                boatswain nipperkin. Smartly jib jack brig reef reef sails bounty rigging splice the
                main brace Admiral of the Black. Dead men tell no tales wench chase guns sutler Sail
                ho fire ship gun case shot Barbary Coast coffer. Pressgang lanyard heave to gunwalls
                galleon jolly boat crimp Blimey lad mizzen. Me jib square-rigged trysail lugger
                keelhaul boatswain Barbary Coast piracy Sail ho. No prey, no pay jury mast reef
                sails spyglass quarterdeck rutters Chain Shot heave down fire ship broadside. Sail
                ho main sheet stern chase bring a spring upon her cable interloper bounty black spot
                sloop driver. Yawl grog rutters Cat o'nine tails gangway pillage crimp black jack
                squiffy Chain Shot.
              </Paragraph>
            </CartStyle>
          );
        }}
      </Motion>
    </Fragment>
  );
};

export default Cart;
