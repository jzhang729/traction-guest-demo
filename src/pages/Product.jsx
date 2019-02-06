import React, { Fragment } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { Pane } from "evergreen-ui";

const Product = props => {
  const {
    data: { products },
    isLoading,
    isError
  } = useFetchApi(
    `https://api.bestbuy.com/v1/products(sku=${props.location.state.sku})?apiKey=${
      process.env.REACT_APP_API_KEY
    }&show=name,sku,image,regularPrice,salePrice&sort=name.asc&format=json`,
    "singleProduct"
  );

  return (
    <Fragment>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pane>
          <h1>{products[0].name}</h1>
          <div>
            <img src={products[0].image} alt={products[0].name} />
          </div>
          {/* <span>{props.location.state.sku}</span> */}
        </Pane>
      )}
    </Fragment>
  );
};

export default Product;
