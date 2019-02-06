import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon, Pane, Heading } from "evergreen-ui";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";

const OuterWrapper = styled.div`
  background-color: #e8fdf5;
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

const Header = () => {
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  return (
    <OuterWrapper>
      <Pane padding="1.5rem">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Heading size={600}>Captain Hook's Electronics</Heading>
        </Link>
      </Pane>
      <div />

      <Pane padding="1.5rem">
        <Icon
          color="dark"
          cursor="pointer"
          size={32}
          icon="shopping-cart"
          onClick={() => {
            setIsCartVisible(!isCartVisible);
          }}
        />
      </Pane>
    </OuterWrapper>
  );
};

export default Header;
