import React from "react";
import { useUserStore } from "./Login";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(150px, auto); */
  grid-template-columns: repeat(24, minmax(35px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-auto-flow: dense;
  gap: 10px;
`;
const Item = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  grid-column: span ${(props) => props.colSpan};
  grid-row: span ${(props) => props.rowSpan};
  background-color: ${(props) => props.bgColor};
`;

const colors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
];

function MyPage() {
  const { user } = useUserStore();
  console.log(user?.email);

  const generateItems = () => {
    const items = [];
    for (let i = 1; i <= 20; i++) {
      const colSpan = Math.floor(Math.random() * 3) + 3;
      const rowSpan = Math.floor(Math.random() * 3) + 3;
      const bgColor = colors[Math.floor(Math.random() * colors.length)];
      items.push(
        <Item
          key={i}
          number={i}
          colSpan={colSpan}
          rowSpan={rowSpan}
          bgColor={bgColor}
        >
          {i}
        </Item>
      );
    }
    return items;
  };

  return (
    <div>
      <h1>마이페이지</h1>
      <Container>{generateItems()}</Container>
    </div>
  );
}

export default MyPage;
