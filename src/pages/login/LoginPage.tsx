import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

const Img = require("../../assets/images/harmburger.png");
const LoginPage = () => {
  return (
    <>
      <Navbar show={false} />
      <Wrapper>
        <Main>
          <Image>
            <img alt="login" src={Img} />
          </Image>
          <LogIn>
            <LoginForm />
          </LogIn>
        </Main>
      </Wrapper>
    </>
  );
};

export default LoginPage;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 10vh);
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  width: 70%;
  max-width: 1000px;
  border-radius: 5px;
  box-shadow: 0 0 3px;
  @media (max-width: 800px) {
    width: "70%";
    max-width: 600px;
  }
`;
const Image = styled.div`
  width: 100%;
  text-align: center;
  height: 300px;

  img {
    margin: auto;
    text-align: center;
    height: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogIn = styled.div`
  width: 100%;
`;
