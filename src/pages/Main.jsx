import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Pane, Strong, Text } from "evergreen-ui";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const result = await axios
        .get(
          `https://api.bestbuy.com/v1/products((search=LG)&(categoryPath.id=abcat0101000))?apiKey=sUu2r5kFBOd8VPsYvCuGdBbb&sort=thumbnailImage.asc&show=thumbnailImage,addToCartUrl,image,name,regularPrice,salePrice,shortDescription,type,sku&format=json`
        )
        .then(response => response.data.products);
      console.log(result);
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pane display="flex" flexWrap="wrap">
          {products.map(product => {
            return (
              <Pane
                margin="1rem"
                padding="1rem"
                maxWidth="30%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="muted"
                key={product.sku}
                onMouseEnter={() => console.log("mouse entered")}
              >
                <Pane marginBottom="2rem">
                  <img src={product.image} alt={product.name} />
                </Pane>
                <Pane>
                  <Strong size={400}>{product.name}</Strong>
                </Pane>
              </Pane>
            );
          })}
        </Pane>
      )}
    </Fragment>
  );
};

export default Main;
