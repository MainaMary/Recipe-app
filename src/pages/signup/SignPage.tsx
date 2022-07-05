import React from "react";
import styled from "styled-components";
import LoginForm from "./SignUpForm";

const SignPage = () => {
  return (
    <Wrapper>
      <Main>
        <Image>image</Image>
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
  height: 50%;
`;
const Main = styled.div`
  display: flex;
  width: 60%;
`;
const Image = styled.div`
  width: 100%;
  background-color: green;
`;
const LogIn = styled.div`
  width: 100%;
  background-color: yellow;
`;
