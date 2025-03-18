import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMoviesNowPlaying } from "./api";

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
  const IMG_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovies();
  }, []);

  // 1. await는 반드시 async함수안에 사용한다.
  // 2. try~catch구문을 이용하는 것이 좋다.
  async function getMovies() {
    try {
      let response = await getMoviesNowPlaying(); // 200 OK
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error); // 400, 404, 500 기타등등
    }
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
        {loading ? (
          <p>로딩중...</p>
        ) : (
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {movie.genre_ids}</Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
}

export default MovieList;
