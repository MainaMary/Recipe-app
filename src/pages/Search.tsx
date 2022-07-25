import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
const Search = () => {
  const fetchRecipes = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    return res;
  };

  const { data, isLoading, isError, isSuccess } = useQuery(
    "getRecipes",
    fetchRecipes
  );
  console.log(isSuccess && data, "data");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <p>Search</p>
    </div>
  );
};

export default Search;
