import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
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
    <div>
      <Header />
      <div className="flex flex-wrap">
        {products.map(product => {
          return (
            <div key={product.sku} className="mw-20 ma3">
              <img className="product-image" src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
