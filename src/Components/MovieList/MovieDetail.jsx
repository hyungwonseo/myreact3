import React, { use, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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

  async function getMovieInfo() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Container>
        <Header>
          <h1>타이틀</h1>
        </Header>
        <Img></Img>
        <Content>
          <p>타이틀</p>
          <p>장르</p>
          <p>개봉일</p>
          <p>상영시간</p>
          <p>감독</p>
          <p>배우</p>
          <p>영화설명</p>
        </Content>
      </Container>
    </div>
  );
}

export default MovieDetail;
