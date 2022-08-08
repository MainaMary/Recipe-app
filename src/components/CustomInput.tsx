import React from "react";
import styled from "styled-components";
import "../App.css";

const inputStyles = {
  borderRadius: "5px",
  padding: "5px 9px",
  outline: "none",
  width: "100%",
  backgroundColor: "#000",
};
const InputStyles = {
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
    <input
      type="text"
      onChange={onChange}
      name={name}
      value={value}
      required={required}
      className="input-styles"
    />
  );
};

export default CustomInput;
