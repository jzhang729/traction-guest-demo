import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios
      .get(
        `https://api.bestbuy.com/v1/products((search=LG)&(categoryPath.id=abcat0101000))?apiKey=sUu2r5kFBOd8VPsYvCuGdBbb&sort=thumbnailImage.asc&show=thumbnailImage,addToCartUrl,image,name,regularPrice,salePrice,shortDescription,type,sku&format=json`
      )
      .then(response => response.data.products);

    console.log(result);

    setProducts(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div>
        {products.map(product => {
          return (
            <div key={product.sku} className="mw-20 ma3 ">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Main;
