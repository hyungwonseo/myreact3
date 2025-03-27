import { createGlobalStyle } from "styled-components";
import { ChartTest1 } from "./Components/Chartjs/ChartTest1";
import { ChartTest2 } from "./Components/Chartjs/ChartTest2";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ChartTest1 />
      <ChartTest2 />
    </div>
  );
}

export default App;
