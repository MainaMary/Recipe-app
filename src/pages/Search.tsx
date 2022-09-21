import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();
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
  const handleImage = (id: string) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Wrapper>
          {isSuccess &&
            data?.data?.recipes.map((recipe: any, index: number) => (
              <Box key={index}>
                <Title>{recipe.title}</Title>
                {isLoading ? (
                  <p>Loader..</p>
                ) : (
                  <LazyLoadImage
                    src={recipe.image}
                    alt={recipe.title}
                    onClick={() => handleImage(recipe.id)}
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
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 767px) : {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 12px;
`;
const Box = styled.div`
  height: 300px;
  width: 300px;
  margin: 12px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
