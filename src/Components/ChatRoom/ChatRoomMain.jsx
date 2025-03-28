import React from "react";
import UserPage from "./UserPage";

function ChatRoomMain() {
  //const url = "http://localhost:8080"; // 개발용 URL. 개발완료시기에는 변경필요
  const url = "";
  // Proxy를 사용하면 url 절대경로(http://localhost:8080) 지정 안해도 됨!!
  // 상대경로로 보낼 경우 vite.config.js에 정의된 서버주소로 자동으로 포워딩
  // 이 기능은 개발시에만 적용되며 빌드때는 프록시 기능 적용 안됨 (즉, 코드 삭제할 필요X)
  return (
    <>
      <UserPage url={url} />
    </>
  );
}

export default ChatRoomMain;
