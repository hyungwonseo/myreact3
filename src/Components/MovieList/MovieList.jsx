import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  function getMoviesNowPlaying() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
      },
    });
  }

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
