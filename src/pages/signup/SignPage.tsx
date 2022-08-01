import React from "react";
import styled from "styled-components";
import LoginForm from "./SignUpForm";
// import Img from ;

const Img = require("../../assets/images/login-image.png");

const SignPage = () => {
  return (
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
  );
};

export default SignPage;
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
`;
const LogIn = styled.div`
  width: 100%;
`;
