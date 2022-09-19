import React from "react";
import styled from "styled-components";
import SignupForm from "./SignupForm";

const Img = require("../../assets/images/login-image.png");

const SignupPage = () => {
  return (
    <Wrapper>
      <Main>
        <Image>
          <img alt="login" src={Img} />
        </Image>
        <LogIn>
          <SignupForm />
        </LogIn>
      </Main>
    </Wrapper>
  );
};

export default SignupPage;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 10vh);
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  width: 70%;
  border-radius: 5px;
  box-shadow: 0 0 3px;
`;
const Image = styled.div`
  width: 100%;
  text-align: center;

  img {
    margin: auto;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogIn = styled.div`
  width: 100%;
`;