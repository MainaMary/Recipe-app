import React, { useRef, useState } from "react";
import {
  FormWrapper,
  Box,
  Password,
  PasswordWrap,
  Button,
} from "../../styles/styled";

import CustomLabel from "../../components/CustomLabel";
import CustomInput from "../../components/CustomInput";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleEmailChange = () => {
    setEmail(emailRef.current);
    setEmailErr("");
  };
  const handlePasswordChange = () => {
    setPassword(passwordRef.current);
  };
  const handleSubmit = (e: React.FormEvent) => {
    if (!email) {
      setEmailErr("Email is required");
    }

    e.preventDefault();
    console.log(email, password);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>'Error'</div>
      <div>
        <h2 style={{ color: "var(--globalColor)" }}>Log in</h2>
      </div>

      <Box>
        <CustomLabel>New email</CustomLabel>
        <CustomInput
          ref={emailRef}
          value={email}
          name="email"
          onChange={handleEmailChange}
        />
        <div style={{ fontSize: "12px", color: "red", margin: "5px 0" }}>
          {emailErr ? emailErr : ""}
        </div>
      </Box>
      <Password>
        <PasswordWrap>
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            value={password}
            name="password"
            onChange={handlePasswordChange}
          />
          <div style={{ fontSize: "12px", color: "red", margin: "5px 0" }}>
            {passwordErr ? passwordErr : ""}
          </div>
        </PasswordWrap>
      </Password>

      <Box></Box>
    </FormWrapper>
  );
};

export default UpdateProfile;
