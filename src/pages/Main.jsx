import React from "react";
import { Pane } from "evergreen-ui";
import ProductCard from "../components/ProductCard";
import useFetchApi from "../hooks/useFetchApi";
import { PageWrapper } from "../styles/global";
import Loading from "../components/Loading";

const Main = () => {
  const { data, isLoading, isError } = useFetchApi(
    `https://api.bestbuy.com/v1/products((manufacturer=Samsung)&(categoryPath.id=abcat0101000))?apiKey=${
      process.env.REACT_APP_API_KEY
    }&sort=thumbnailImage.asc&show=thumbnailImage,addToCartUrl,image,name,regularPrice,salePrice,shortDescription,type,sku&format=json`,
    "listProducts"
  );

  return (
    <PageWrapper>
      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <Loading />
      ) : (
        <Pane display="flex" flexWrap="wrap" justifyContent="center">
          {data.products.map(product => {
            return <ProductCard key={product.sku} product={product} />;
          })}
        </Pane>
      )}
    </PageWrapper>
  );
};

export default Main;
