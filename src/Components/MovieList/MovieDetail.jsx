import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieCreditById, getMovieDetailById, IMG_PATH } from "./api";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  color: dodgerblue;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;

function MovieDetail() {
  const [data, setData] = useState(null);
  const [credit, setCredit] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log(response.data);
      setData(response.data);
      response = await getMovieCreditById(id);
      console.log(response.data);
      setCredit(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 안되고 있습니다");
    }
  }

  return (
    <div>
      <Container>
        {loading ? (
          "로딩중..."
        ) : (
          <>
            <Header>
              <h1>{data.title}</h1>
            </Header>
            <Img src={IMG_PATH + data.backdrop_path}></Img>
            <Content>
              <p>타이틀</p>
              <p>장르</p>
              <p>개봉일</p>
              <p>상영시간</p>
              <p>감독</p>
              <p>배우</p>
              <p>영화설명</p>
            </Content>
          </>
        )}
      </Container>
    </div>
  );
}

export default MovieDetail;
