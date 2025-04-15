import { createGlobalStyle } from "styled-components";
import ChatRoomMain from "./Components/ChatRoom/ChatRoomMain";
import FileUpload from "./Components/FileUpload/FileUpload";

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
      <ChatRoomMain />
    </div>
  );
}

export default App;
