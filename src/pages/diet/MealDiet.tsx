import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/styled";
interface Props {
  meal: any;
}
const MealDiet = ({ meal }: Props) => {
  const navigate = useNavigate();
  console.log(meal);
  const fetchInfo = async () => {
    return await axios.get(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
  };
  const { data, isLoading } = useQuery([meal.id], fetchInfo);
  console.log(data, "data");
  const showMore = (id: string) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <Wrapper>
      <Card>
        <Title>{meal.title}</Title>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Image src={data?.data?.image} alt={meal.title} />
        )}

        <Title>Number of minutes {meal.readyInMinutes}</Title>
        <Button onClick={() => showMore(meal.id)}>See more</Button>
      </Card>
    </Wrapper>
  );
};

export default MealDiet;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  max-width: 300px;
  width: 100%;
  margin: auto;
  height: 380px;
  padding: 8px 16px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--borderRadius);
  margin: 12px 0;
`;
const Title = styled.h3`
  margin: 12px 0;
`;
