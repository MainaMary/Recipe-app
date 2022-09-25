import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import axios from "axios";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder={"Search..."}
      />
      <Button>Search</Button>
    </Wrapper>
  );
};

export default Search;
const Input = styled.input`
  width: 50%;
  padding: 10px 16px;
  outline: none;
`;
const Wrapper = styled.form`
  padding: 30px 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button``;
