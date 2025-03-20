import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(218deg 50% 91%);
`;
const Box = styled.div`
  width: 300px;
  height: auto;
  background: hsl(213deg 85% 97%);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
`;
const Smallbox = styled.form`
  width: 100%;
  background: hsl(0deg 0% 100%);
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 20px;
  color: hsl(0deg 0% 30%);
`;
const Input = styled.input`
  outline: none;
  border: none;
  &::placeholder {
    color: hsl(0deg 0% 0%);
    font-size: 0.9em;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1em;
  margin-top: 10px;
  background: hsl(233deg 36% 38%);
  color: hsl(0 0 100);
  border: none;
  border-radius: 30px;
  font-weight: 600;
`;

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUserName(e) {
    setUserName(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("click " + userName + " " + password);
  }

  return (
    <div>
      <Container>
        <Box onClick={(e) => handleSubmit(e)}>
          <h1>LOGIN</h1>
          <br />
          <Smallbox>
            <label>Email Address</label>
            <Input
              type="text"
              value={userName}
              onChange={(e) => {
                handleChangeUserName(e);
              }}
              placeholder="Username@gmail.com"
            />
          </Smallbox>
          <Smallbox>
            <label>Email Address</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                handleChangePassword(e);
              }}
              placeholder="· · · · · · · · · · · ·"
            />
          </Smallbox>
          <Button type="submit">로그인</Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
