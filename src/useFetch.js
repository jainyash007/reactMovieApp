import React, { useState, useEffect } from "react";

// setting the api link
export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setIsLoading(`false`);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js - Let's understand this with an example. Suppose we have an input element that gets some data when we type something. For example, let's say we type any pin-code, and it returns some data.
  // But there is a catch here. Let's say our pin-code is 800001. If we type the first character, that is 8, we will send request to the backend server. Then we type 0, and we will send another request to the server, and so on.
  // This calls the API so many times, and in turn overuses the requests. So, to prevent this, we use something called a debounce function.
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 500);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
