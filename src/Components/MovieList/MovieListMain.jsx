import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

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
                <Route path="/" element={null} />
                <Route path="/movie" element={null}>
                  <Route index element={null} />
                  <Route path=":id" element={null} />
                </Route>
                <Route path="/search" element={null} />
                <Route path="/mypage" element={null} />
                <Route path="/login" element={null} />
                <Route path="*" element={null} />
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
