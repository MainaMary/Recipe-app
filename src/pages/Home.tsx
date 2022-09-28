import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";
import { Loader } from "../styles/styled";

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
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <CustomLoader />
        </div>
      ) : (
        <Wrapper>
          <Popular>Popular picks</Popular>
          {isSuccess && (
            <Grid>
              {data?.data?.recipes.map((recipe: any, index: number) => (
                <Box key={index} onClick={() => handleImage(recipe.id)}>
                  <Title>{recipe.title}</Title>
                  <LazyLoadImage src={recipe.image} alt={recipe.title} />
                </Box>
              ))}
            </Grid>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Home;

const Wrapper = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
`;
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
`;
const Popular = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 0 auto 12px auto;
  font-weight: 500;
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
