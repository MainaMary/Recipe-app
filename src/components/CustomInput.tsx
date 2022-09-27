import React from "react";
import styled from "styled-components";

// const inputStyles = {
//   padding: "5px 9px",
//   outline: "none",
//   width: "100%",
//   backgroundColor: "#000",
// };
// const InputStyles = {
//   borderRadius: "5px",
//   padding: "5px 9px",
//   outline: "none",
//   width: "100%",
//   backgroundColor: "#000",
// };
interface Props {
  onChange: (val: any) => void;
  name: string;
  value: string;
  required?: boolean;
}

const CustomInput = ({ onChange, name, value, required }: Props) => {
  return (
    <Input
      type="text"
      onChange={onChange}
      name={name}
      value={value}
      required={required}
    />
  );
};

export default CustomInput;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #737373;
  border-radius: 5px;
`;
