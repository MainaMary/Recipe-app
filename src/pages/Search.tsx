import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
const Search = () => {
  const fetchRecipes = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    );

    return res;
  };

  const { data, isLoading, isError, isSuccess } = useQuery(
    "getRecipes",
    fetchRecipes
  );
  console.log(isSuccess && data?.data?.recipes, "data");
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Wrapper>
          {isSuccess &&
            data?.data?.recipes.map((recipe: any, index: number) => (
              <Box key={index}>
                <h2>{recipe.title}</h2>
                {isLoading ? (
                  <p>Loader..</p>
                ) : (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </Box>
            ))}
        </Wrapper>
      )}
    </>
  );
};

export default Search;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: blue;
  gap: 10px;
  width: 100%;
`;
const Box = styled.div`
  min-height: 1rem;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
