import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const Search = () => {
  const apiKey = "0dbab897cd564380ae9be427fd9107f6";

  const key = "0fa659e976014a1bbfe9c40e9abca280";
  console.log(process.env.REACT_APP_API_KEY);
  const fetchRecipes = async () => {
    const url = ` https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}`;
    return await axios(url);
  };
  const { data, isLoading, isError } = useQuery("getRecipes", fetchRecipes);
  console.log(data, "data");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <p>Search</p>
    </div>
  );
};

export default Search;
