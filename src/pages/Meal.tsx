import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import styled from "styled-components";
//import { TbArrowNarrowRight } from "react-icons/tb";

interface IProps {
  instructions?: any;
}
interface IngredientsProps {
  ingredients?: any;
}

export const Instructions = (props: IProps) => {
  const { instructions } = props;
  const instructionsArr = instructions[0].steps;
  return (
    <ul
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "start",
      }}
    >
      {instructionsArr.map((item: any) => (
        <li style={{ color: "#B5B5B5", margin: "10px 0" }} key={item.number}>
          {item.step}
        </li>
      ))}
    </ul>
  );
};
export const Ingredients = (props: IngredientsProps) => {
  const { ingredients } = props;
  return (
    <ul
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "start",
      }}
    >
      {ingredients.map((item: any) => (
        <li style={{ color: "#B5B5B5", margin: "10px 0" }} key={item.id}>
          {item.name} - {item.unit}
        </li>
      ))}
    </ul>
  );
};
const Meal = () => {
  const [toggle, setToggle] = useState<number>(1);
  const { id } = useParams();
  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return response;
  };
  const { data, isLoading, isSuccess } = useQuery(["get-recipes"], getRecipes);
  console.log(data?.data, "data");
  const handleToggle = (tabIndex: number) => {
    setToggle(tabIndex);
  };

  return (
    <div>
      {isSuccess ? (
        <Wrapper>
          <>
            <h2>{data?.data?.title}</h2>
            <Type>
              Dish type:
              <span>
                {data?.data?.dishTypes.map((type: any, index: number) => {
                  const firstLetter = type[0].toUpperCase();
                  const remainingLetters = type.slice(1);

                  return (
                    <Span
                      key={index}
                    >{`${firstLetter}${remainingLetters}`}</Span>
                  );
                })}
              </span>
            </Type>

            <img src={data?.data?.image} alt={id} />
          </>
          <div>
            <Tab>
              <div
                className={toggle === 1 ? "tab-active" : "tab"}
                onClick={() => handleToggle(1)}
              >
                Instructions
              </div>
              <div
                className={toggle === 2 ? "tab-active" : "tab"}
                onClick={() => handleToggle(2)}
              >
                Ingredients
              </div>
            </Tab>
            <h2>{`How to prepare ${data?.data?.title}`}</h2>
            {toggle === 1 ? (
              <Instructions instructions={data?.data?.analyzedInstructions} />
            ) : null}

            {toggle === 2 ? (
              <Ingredients ingredients={data?.data?.extendedIngredients} />
            ) : null}
          </div>
        </Wrapper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Meal;
const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  text-align: center;
  backgroundcolor: blue;
`;
const Span = styled.span`
  margin: 0 5px;
  color: orange;
`;
const Type = styled.p`
  margin: 10px 0;
`;
const Tab = styled.h2`
  display: flex;
  justifycontent: center;
  margin: auto;
`;
const Box = styled.ul`
width: "50%",
margin: "auto",
textAlign: "start",`;
const List = styled.li`
color: "#B5B5B5", 
margin: "10px 0"
`;
