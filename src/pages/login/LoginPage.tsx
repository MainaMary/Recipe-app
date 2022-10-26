import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "../../components/Navbar";
import { Image, LogIn, Main, Wrapper } from "../../styles/styled";

const Img = require("../../assets/images/harmburger.png");
const LoginPage = () => {
  return (
    <>
      <Navbar show={false} checkBtns={true} />
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
