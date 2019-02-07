import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Pane, Heading } from "evergreen-ui";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import shipLogo from "../assets/ship.svg";

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
          <Heading marginLeft="1.5rem" size={800}>
            Captain H00X
          </Heading>
          <Heading marginLeft="1.5rem" marginTop="default" fontStyle="italic" size={400}>
            Piratin' since '94
          </Heading>
        </Link>
      </Pane>
      <div />
      <Pane
        cursor="pointer"
        onClick={() => {
          setIsCartVisible(!isCartVisible);
        }}
        padding="1.5rem"
        maxWidth={100}
      >
        <img src={shipLogo} alt="Arggghh" />
      </Pane>
    </OuterWrapper>
  );
};

export default Header;
