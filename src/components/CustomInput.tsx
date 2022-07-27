import React from "react";
import styled from "styled-components";

const inputStyles = {
  borderRadius: "5px",
  padding: "5px 9px",
  outline: "none",
  width: "100%",
  backgroundColor: "#000",
};
interface Props {
  onChange: (val: any) => void;
  name: string;
  value: string;
  required?: boolean;
}
const CustomInput = ({ onChange, name, value, required }: Props) => {
  return (
    <div>
      <FormInput
        type="text"
        onChange={onChange}
        name={name}
        value={value}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
const FormInput = styled.input`
border-radius: 5px,
padding: 5px 9px,
outline: none,
width: 100%,
backgroundColor: #000,
`;
