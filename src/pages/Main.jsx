import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";
import { Pane } from "evergreen-ui";
import ProductCard from "../components/ProductCard";

import sampleData from "../sampleData";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      // const result = await axios
      //   .get(
      //     `https://api.bestbuy.com/v1/products((search=LG)&(categoryPath.id=abcat0101000))?apiKey=${API_KEY}&sort=thumbnailImage.asc&show=thumbnailImage,addToCartUrl,image,name,regularPrice,salePrice,shortDescription,type,sku&format=json`
      //   )
      //   .then(response => response.data.products);

      const result = sampleData;

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
            return <ProductCard key={product.sku} product={product} />;
          })}
        </Pane>
      )}
    </Fragment>
  );
};

export default Main;
