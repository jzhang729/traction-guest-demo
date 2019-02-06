import React, { Fragment } from "react";

import Header from "./components/Header";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Normalize } from "styled-normalize";
import styled from "styled-components";
import useCart from "./hooks/useCart";
import CartContext from "./contexts/CartContext";

const AppWrapper = styled.div`
  position: absolute;
`;

const Cart = styled.div`
  position: absolute;
  border: 2px solid red;
  overflow-y: scroll;
  top: 5rem;
  right: 0;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
  padding: 1rem;
  opacity: 1;
  /* transform: ${props => (props.isCartVisible ? "translateX(0%)" : "translateX(100%)")}; */
  box-shadow: 0.25rem 0 1rem #333333;
  width: 100%;

  @media (min-width: 400px) {
    width: 400px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px; /* Base measure for REM units */ 
    margin: 0;
    padding: 0;
  }  
`;

const AsyncMain = Loadable({
  loader: () => import("./pages/Main"),
  loading: Loading
});

const AsyncProduct = Loadable({
  loader: () => import("./pages/Product"),
  loading: Loading
});

const App = () => {
  const { isCartVisible, setIsCartVisible } = useCart();

  return (
    <Fragment>
      <Normalize />
      <GlobalStyle /> {/* Overwrite any global styles from Normalize here */}
      <BrowserRouter>
        <CartContext.Provider
          value={{
            isCartVisible,
            setIsCartVisible
          }}
        >
          <AppWrapper>
            <Route path="/" component={Header} />
            <Switch>
              <Route path="/" exact component={AsyncMain} />
              <Route path="/products/:id" exact component={AsyncProduct} />
              <Route component={NotFound} />
            </Switch>
            {isCartVisible ? <Cart>Cart goes here</Cart> : null}
          </AppWrapper>
        </CartContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
