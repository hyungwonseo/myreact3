import React, { use, useState } from "react";
import styled from "styled-components";
import { Button } from "./MovieList";
import { Container } from "./MovieList";
import { Card } from "./MovieList";
import { Img } from "./MovieList";
import { Text } from "./MovieList";
import { useNavigate } from "react-router-dom";

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  width: 500px;
  height: 40px;
`;

function Search() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function handleChange(value) {
    setKeyword(value);
  }

  return (
    <div>
      <SearchBox>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="검색어를 입력해주세요"
        />
        <Button>검색</Button>
      </SearchBox>
      <h3>{keyword ? `${keyword}로 검색한 결과 리스트` : "Search"}</h3>
      <Container>
        <Card onClick={() => navigate(``)}>
          <Img src={null}></Img>
          <Text>타이틀 : {null}</Text>
          <Text>장르 : {null}</Text>
          <hr />
          <Text>fdsfsdfsd</Text>
        </Card>
      </Container>
    </div>
  );
}

export default Search;
