import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import CustomLabel from "../../components/CustomLabel";
import { Authcontext } from "../../context/Authcontext";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
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

const SignupForm = () => {
  const navigate = useNavigate();
  const { signUp, currentUser } = useContext(Authcontext);
  console.log({ currentUser });
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { username, email, password, confirmPswd } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleValidation = () => {
    if (!email) {
      setUserNameErr("Username is required");
    }
    if (!email) {
      setEmailErr("Email is required");
    } else if (!validateEmail(email)) {
      setEmailErr("Valid email adress is required");
    }
    if (!password) {
      setPasswordErr("Password is required");
    }
    if (!confirmPswd) {
      setConfirmPswdErr("Confirm password is required");
    }
    if (password && password !== confirmPswd) {
      setConfirmPswdErr("Passwords do not match");
    }
  };
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    handleValidation();
    try {
      setError("");
      signUp(auth, email, password);
    } catch {
      setError("Failed to create an account. Please try again");
    }
    setLoading(false);
  };
  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <Account onClick={() => navigate("/login")}>
        <p>
          Already have an account?{" "}
          <span
            style={{
              color: "#2a45cd",
              textDecoration: "underline",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </p>
      </Account>
      <div>{error}</div>
      <div>
        <h2>Create an account</h2>
      </div>
      <Box>
        <CustomLabel>Username</CustomLabel>
        <CustomInput value={username} name="username" onChange={handleChange} />
      </Box>
      <Box>
        <CustomLabel>Email</CustomLabel>
        <CustomInput
          value={email}
          name="email"
          onChange={handleChange}
          required
        />
      </Box>
      <Password>
        <PasswordWrap>
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
        </PasswordWrap>
        <PasswordWrap>
          <CustomLabel>Confirm Password</CustomLabel>
          <CustomInput
            value={confirmPswd}
            name="confirmPswd"
            onChange={handleChange}
          />
        </PasswordWrap>
      </Password>
      <Terms>
        <input type="checkbox" />
        <p style={{ width: "95%" }}>
          By creating an account, you agree to the terms of service conditions
          and privacy policy
        </p>
      </Terms>
      <Box>
        <Button disabled={loading}>Sign up</Button>
      </Box>
    </FormWrapper>
  );
};

export default SignupForm;
const FormWrapper = styled.form`
  padding: 12px 18px;
  border-left: 1px solid #000;
  @media (max-width: 800px) {
    width: "100%";
    padding: "12px 10px";
  }
`;
const Box = styled.div`
  width: 100%;
  margin: 12px 0;
`;
const PasswordWrap = styled.div`
  width: 45%;
`;
const Terms = styled.div`
  display: flex;
  margin: 12px 0;
  width: 100%;
  justify-content: space-between;
  p: {
    margin-top: 5px;
  }
`;
const Password = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Account = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #2a45cd;
  border: none;
  outline: none;
  font-size: 16px;
`;
