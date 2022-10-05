import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

interface Prop {
  openModal: boolean;
  handleModal: () => void;
}
interface DietProps {
  id: number;
  label: string;
  value: string;
}
const dietArr = [
  {
    id: 1,
    label: "Gluten free",
    value: "glutenfree",
  },
  {
    id: 2,
    label: "Ketogenic",
    value: "ketogenic",
  },
  { id: 3, label: "Vegeterian", value: "vegeterian" },
  { id: 4, label: "Vegan", value: "vegan" },
  { id: 5, label: "Pesecatarian", value: "pesectarian" },
];
const Modal = (prop: Prop) => {
  const { openModal, handleModal } = prop;
  const [diet, setDiet] = useState("");
  const handleSelect = (e: any) => {
    setDiet(e.target.value);
  };
  if (!openModal) {
    return null;
  }
  console.log(diet, "diet");
  const fetchDiet = async () => {
    return await axios(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&diet=${diet}`
    );
  };
  const { data, isLoading } = useQuery(["fetch-diet"], fetchDiet);

  return (
    <Main onClick={handleModal}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Close onClick={handleModal}>
          <h3>Meal plan</h3>
          <p style={{ cursor: "pointer" }}>X</p>
        </Close>
        <Box>
          <Select value={diet} onChange={handleSelect}>
            {dietArr.map((item: DietProps) => (
              <Option key={item.id} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Box>
        Coming soon...!!
      </Wrapper>
    </Main>
  );
};

export default Modal;
const Main = styled.div`
  top: 0;
  width: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
const Close = styled.div`
  height: 20px;
  align-items: center;
  text-align: right;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.form`
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 3px #777;
  padding: 10px 16px;
  border-radius: 5px;
`;
const Box = styled.div`
  margin: 12px 0;
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #737373;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
`;
const Option = styled.option`
  font-size: 16px;
  padding-left: 10px;
`;
