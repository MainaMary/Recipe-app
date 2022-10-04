import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel";
import CustomInput from "../../components/CustomInput";
import CustomLoader from "../../components/CustomLoader";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseApp";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPswd: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPswdErr, setConfirmPswdErr] = useState("");
  const handleChange = (e: any) => {
    const { email, password, confirmPswd } = formValues;
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const navigate = useNavigate();
  const hasValue = (obj: any) => {
    for (const i in obj) {
      if (obj[i]) {
        return true;
      }
    }
    return false;
  };
  const handleValidation = () => {
    const errorExists = {
      email: false,
      password: false,
    };
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    handleValidation();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      if (response.user) {
        navigate("/recipe");
      }

      console.log(response.user);
    } catch (error: any) {
      console.log(error.message.Firebase);
      if (error.message.includes("Firebase: Error (auth/wrong-password)")) {
        setPasswordErr("Wrong password");
      } else if (
        error.message.includes("Firebase: Error (auth/user-not-found)")
      ) {
        setEmailErr("Wrong email");
      }
      setError("Failed to login");
    }
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <div>{error}</div>
      <div>
        <h2>Log in</h2>
      </div>

      <Box>
        <CustomLabel>Email</CustomLabel>
        <CustomInput
          value={formValues.email}
          name="email"
          onChange={handleChange}
        />
        <div style={{ fontSize: "12px", color: "red", margin: "5px 0" }}>
          {emailErr ? emailErr : ""}
        </div>
      </Box>
      <Password>
        <PasswordWrap>
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            value={formValues.password}
            name="password"
            onChange={handleChange}
          />
          <div style={{ fontSize: "12px", color: "red", margin: "5px 0" }}>
            {passwordErr ? passwordErr : ""}
          </div>
        </PasswordWrap>
      </Password>

      <Box>
        <Button disabled={loading}>Log in</Button>
      </Box>
      <Account onClick={() => navigate("/")}>
        <p>
          Need an account?{" "}
          <span
            style={{
              color: "#2a45cd",
              textDecoration: "underline",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            Sign up
          </span>
        </p>
      </Account>
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.form`
  padding: 12px 18px;
  border-left: 1px solid #000;
  @media (max-width: 800px) {
    width: "70%";
    padding: "12px 10px";
  }
`;
const Box = styled.div`
  width: 100%;
  margin: 12px 0;
`;
const PasswordWrap = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
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
  border-radius: 5px;
  cursor: pointer;
`;
