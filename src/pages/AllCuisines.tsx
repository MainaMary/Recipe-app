import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Cuisines from "./Cuisines";

interface Props {
  cuisine?: string;
}
interface IProps {
  id: string;
  title: string;
  image: string;
  imageType: string;
}
const AllCuisines = () => {
  const navigate = useNavigate();
  const { cuisine } = useParams();
  const handleMeal = (id: string) => {
    navigate(`/recipe/${id}`);
  };
  const fetchCuisines = async () => {
    const response =
      await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisine}
      `);
    return response;
  };
  const { data, isSuccess, isLoading } = useQuery(
    ["get cuisines", cuisine],
    fetchCuisines
  );
  console.log(data?.data?.results, "data");

  return (
    <>
      <Cuisines cuisine={cuisine} />
      <Grid>
        {data?.data?.results.map((item: IProps) => (
          <Box key={item.id} onClick={() => handleMeal(item.id)}>
            <img alt={item.title} src={item.image} />
            <h3>{item.title}</h3>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default AllCuisines;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Box = styled.div`
  padding: 10px 20px;
  height: 300px;
  width: 400px;A
  margin: 12px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
