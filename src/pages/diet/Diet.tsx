import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CustomLoader from "../../components/CustomLoader";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

interface Props {
  isLoading?: boolean;
  diet?: any;
  nutrients?: any[];
}
const Diet = (props: Props) => {
  const { id } = useParams();
  const [mealId, setMealId] = useState("");
  console.log(id, "id");
  const fetchDiet = async () => {
    const response = await axios(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&diet=${id}`
    );
    return response;
  };
  const { data, isLoading } = useQuery(["fetch-diet", id], fetchDiet);
  console.log(data, "data diet component");
  return (
    <>
      <Navbar />
      {
        <Grid>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <CustomLoader />
            </div>
          ) : (
            <Grid>
              {data?.data?.meals.map((item: any) => {
                setMealId(item.id);
                return <div></div>;
              })}
            </Grid>
          )}
        </Grid>
      }
    </>
  );
};

export default Diet;
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
