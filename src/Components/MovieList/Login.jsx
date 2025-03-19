import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Box = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUserName(e) {
    setUserName(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <Container>
        <h1>로그인</h1>
        <Box>
          <Input
            type="text"
            value={userName}
            onChange={(e) => {
              handleChangeUserName(e);
            }}
            placeholder="이름을 입력해주세요"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              handleChangePassword(e);
            }}
            placeholder="패스워드를 입력해주세요"
          />
          <Button></Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
