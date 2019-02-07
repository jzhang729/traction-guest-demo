import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { Heading, Pane, Button, UnorderedList, ListItem } from "evergreen-ui";
import { PageWrapper } from "../styles/global";
import Loading from "../components/Loading";

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
        <Loading />
      ) : (
        <Pane>
          <Heading size={600} marginY="default">
            {products[0].name}
          </Heading>
          <Pane>
            <Pane display="flex" flexWrap="wrap">
              <Pane flex="0 1 auto" marginBottom="1.5rem">
                <img src={products[0].image} alt={products[0].name} />
              </Pane>

              <Button
                appearance="primary"
                intent="none"
                color="#ffffff"
                marginTop="0"
                marginX="1.5rem"
                height={40}
                onClick={() => {}}
              >
                Loot Item
              </Button>
            </Pane>

            <UnorderedList size={500} marginY="default" minWidth="50vw" maxWidth="70vw">
              {products[0].features.map((chunk, index) => {
                return (
                  <ListItem key={index} icon="caret-right">
                    {chunk.feature}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Pane>
        </Pane>
      )}
    </PageWrapper>
  );
};

export default Product;
