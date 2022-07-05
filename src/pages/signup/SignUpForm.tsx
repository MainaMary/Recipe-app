import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <FormWrapper>
      <Account>
        <p>
          Already have an account? <Link to="/SignupForm">Login</Link>
        </p>
      </Account>
      <div>
        <h2>Create an account</h2>
      </div>
      <Input></Input>
      <Terms>
        <input type="checkbox" />
        <p>By agreeing</p>
      </Terms>
    </FormWrapper>
  );
};

export default SignUpForm;
const FormWrapper = styled.form``;
const Account = styled.div``;
const Input = styled.div``;
const Terms = styled.div``;
