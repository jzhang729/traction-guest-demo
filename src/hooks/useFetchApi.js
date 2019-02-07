import { useState, useEffect } from "react";
import axios from "axios";
import listProducts from "../mockData/listProducts";
import singleProduct from "../mockData/singleProduct";

const useFetchApi = (initialUrl = "", mockResultKey = null) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  /* To avoid hitting the API during development, use mock data if a key is passed in */
  const mockResults = { listProducts, singleProduct };

  const fetchMockData = () => {
    const result = mockResults[mockResultKey];
    try {
      console.log(result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchData = async () => {
    try {
      const result = await axios.get(url).then(response => response.data);
      // console.log(result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(
    () => {
      if (mockResultKey && process.env.NODE_ENV === "development") {
        fetchMockData();
      } else {
        fetchData();
      }
    },
    [url]
  );

  return { data, setUrl, isLoading, isError };
};

export default useFetchApi;
