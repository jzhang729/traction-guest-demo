import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { Heading, Pane } from "evergreen-ui";
import { PageWrapper } from "../styles/global";

const Product = props => {
  const {
    data: { products },
    isLoading,
    isError
  } = useFetchApi(
    `https://api.bestbuy.com/v1/products(sku=${props.location.state.sku})?apiKey=${
      process.env.REACT_APP_API_KEY
    }&show=name,sku,image,regularPrice,salePrice,description,shortDescription,features&sort=name.asc&format=json`,
    "singleProduct"
  );

  return (
    <PageWrapper>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pane>
          <Heading size={600} marginTop="default">
            {products[0].name}
          </Heading>
          <div>
            <img src={products[0].image} alt={products[0].name} />
          </div>
        </Pane>
      )}
    </PageWrapper>
  );
};

export default Product;
