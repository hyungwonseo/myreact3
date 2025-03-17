import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import MovieWrapper from "./MovieWrapper";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import MyPage from "./MyPage";
import Login from "./Login";

function MovieListMain() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Section>
            <Menu>
              <Navbar></Navbar>
            </Menu>
            <ContentBox>
              <Routes>
                <Route path="/" element={Home} />
                <Route path="/movie" element={MovieWrapper}>
                  <Route index element={MovieList} />
                  <Route path=":id" element={MovieDetail} />
                </Route>
                <Route path="/search" element={Search} />
                <Route path="/mypage" element={MyPage} />
                <Route path="/login" element={Login} />
                <Route path="*" element={Error} />
              </Routes>
            </ContentBox>
          </Section>
          <Footer></Footer>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default MovieListMain;
