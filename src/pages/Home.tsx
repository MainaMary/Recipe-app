import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
`;
const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 12px;
`;
const Box = styled.div`
  height: 300px;
  width: 400px;
  margin: 12px auto;
  border-radius: 10px;
  overflow: hidden;
  margin: 12px auto;
  padding: 10px 20px;

  img {
    border-radius: 10px;
  }
`;
