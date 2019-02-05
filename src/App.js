import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Main from "./pages/Main";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Normalize } from "styled-normalize";

import "./App.css";

const GlobalStyle = createGlobalStyle`

  html, body {
    font-size: 16px; /* Base measure for REM units */ 
    margin: 0;
    padding: 0;
  }
  
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Normalize />
        <GlobalStyle />
        <BrowserRouter>
          <Fragment>
            <Route path="/" component={Header} />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/products/:id" exact component={Product} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
