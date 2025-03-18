import React from "react";
import styled from "styled-components";

const Tab = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ff69b4;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Card = styled.div`
  width: 30%;
  border: 1px solid dodgerblue;
  cursor: pointer;
`;
const Img = styled.img``;
const Text = styled.div``;

function MovieList() {
  return (
    <div>
      <h1>MovieList</h1>
      <Tab>
        <Button>Now Playing</Button>
        <Button>Popular</Button>
        <Button>Top Rated</Button>
        <Button>Upcoming</Button>
      </Tab>
      <Container>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
      </Container>
    </div>
  );
}

export default MovieList;
