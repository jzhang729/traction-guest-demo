import React, { Fragment } from "react";
import Loadable from "react-loadable";
import styled from "styled-components";

import Header from "./components/Header";
import Loading from "./components/Loading";
import Cart from "./components/Cart";

import NotFound from "./pages/NotFound";

import useCart from "./hooks/useCart";
import CartContext from "./contexts/CartContext";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px; /* Base measure for REM units */ 
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
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
          <Cart />
          <Route path="/" component={Header} />
          <ContentWrapper>
            <Switch>
              <Route path="/" exact component={AsyncMain} />
              <Route path="/products/:id" exact component={AsyncProduct} />
              <Route component={NotFound} />
            </Switch>
          </ContentWrapper>
        </CartContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
