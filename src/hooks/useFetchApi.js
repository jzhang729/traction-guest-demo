import { useState, useEffect } from "react";
// import axios from "axios";
import sampleData from "../sampleData";

const useFetchApi = (initialUrl = "", initialData = []) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      // const result = await axios.get(url).then(response => response.data.products);
      const result = sampleData;
      console.log(result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(
    () => {
      fetchData();
    },
    [url]
  );

  return { data, setUrl, isLoading, isError };
};

export default useFetchApi;
