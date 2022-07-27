import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomLabel from "../../components/CustomLabel";
import { useAuthConsumer } from "../../context/Authcontext";
const formArr = [
  {
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm password",
    name: "confirm password",
    type: "password",
  },
];
const months = {
  january: 30,
  february: 45,
  march: 67,
};
for (const [key, value] of Object.entries(months)) {
  console.log(`${key}`, `${value * 45}`);
}
const { signUp } = useAuthConsumer;
console.log(useAuthConsumer, "consumer");
const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPswd: "",
  });
  const [userNameErr, setUserNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPswdErr, setConfirmPswdErr] = useState("");
  const { username, email, password, confirmPswd } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    signUp(email, password);
  };
  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <Account>
        <p>
          Already have an account? <Link to="/SignupForm">Login</Link>
        </p>
      </Account>
      <div>
        <h2>Create an account</h2>
      </div>
      <div style={{ width: "100%" }}>
        <CustomLabel>Username</CustomLabel>
        <input />
        <CustomInput value={username} name="username" onChange={handleChange} />
      </div>
      <div>
        <CustomLabel>Email</CustomLabel>
        <CustomInput value={email} name="email" onChange={handleChange} />
      </div>
      <Password>
        <div>
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <CustomLabel>Confirm Password</CustomLabel>
          <CustomInput
            value={confirmPswd}
            name="confirmPswd"
            onChange={handleChange}
          />
        </div>
      </Password>
      <Terms>
        <input type="checkbox" />
        <p>
          By creating an account, you agree to the terms of service conditions
          and privacy policy
        </p>
      </Terms>
    </FormWrapper>
  );
};

export default SignUpForm;
const FormWrapper = styled.form`
  padding: 12px 18px;
  border-left: 1px solid #000;
`;
const Account = styled.div``;
const Input = styled.div``;
const Terms = styled.div`
  display: flex;

  p: {
    margin-top: 5px;
  }
`;
const Password = styled.div`
  display: flex;
  width: 50%;
  gap: 8px;
`;
