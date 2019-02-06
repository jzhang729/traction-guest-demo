import React, { Fragment } from "react";

import Header from "./components/Header";
// import Main from "./pages/Main";
// import Product from "./pages/Product";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import asyncComponent from "./components/asyncComponent";

import { Normalize } from "styled-normalize";

import "./App.css";

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
  return (
    <Fragment>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <Fragment>
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact component={AsyncMain} />
            <Route path="/products/:id" exact component={AsyncProduct} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
