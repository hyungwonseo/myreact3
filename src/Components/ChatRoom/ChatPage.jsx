import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useUserStore } from "./Login";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: 600px;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  margin: 30px auto 0;
  padding: 15px;
`;
const Notification = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  margin: 30px auto 0;
  padding: 15px;
`;
const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #ececec;
`;
const MessageArea = styled.div`
  list-style-type: none;
  background-color: #fff;
  margin: 0;
  overflow: auto;
  overflow-y: scroll;
  /* padding: 0 20px 0px 20px; */
  height: calc(100% - 130px);
`;
const Box = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: calc(100% - 85px);
  height: 40px;
  padding: 3px;
`;
const Button = styled.button`
  width: 80px;
  height: 38px;
  margin-left: 5px;
  display: inline-block;
  padding: 10px 10px;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const MessageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 5px;
  border-bottom: 1px solid #ececec;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 50%;
  font-size: 1.8rem;
`;
const Message = styled.div`
  color: #777;
  font-size: 14px;
  word-wrap: break-word;
`;
const Join = styled(Message)`
  text-align: center;
  border-bottom: 1px solid #ececec;
  padding: 7px 0;
`;
const Leave = styled(Join)``;
const Box2 = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const colors = [
  "#2196F3",
  "#32c787",
  "#00BCD4",
  "#ff5652",
  "#ffc107",
  "#ff85af",
  "#FF9800",
  "#39bbb0",
];

function ChatPage({ username, message, stompClientRef }) {
  const { user, isLoggedIn, login, logout } = useUserStore();
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [notification, setNotification] = useState("");
  const [privateMessage, setPrivateMessage] = useState("");
  const [targetUsername, setTargetUsername] = useState("");
  const messageAreaRef = useRef();

  useEffect(() => {
    handleMessage(message);
  }, [message]);

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messageList]);

  function handleMessage(message) {
    if (!message) {
      return;
    }
    console.log(message);
    if (message.type === "JOIN") {
      message.content = message.sender + " joined!";
    } else if (message.type === "LEAVE") {
      message.content = message.sender + " left!";
    } else {
    }
    setMessageList((prev) => [...prev, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    if (value && stompClientRef.current) {
      const chatMessage = {
        sender: username,
        content: value,
        type: "CHAT",
      };
      stompClientRef.current.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify(chatMessage),
      });
      setValue("");
    }
  }

  function getAvatarColor(messageSender) {
    var hash = 0;
    for (var i = 0; i < messageSender.length; i++) {
      hash = 31 * hash + messageSender.charCodeAt(i);
    }
    var index = Math.abs(hash % colors.length);
    return colors[index];
  }

  async function handleNotification(e) {
    e.preventDefault();
    if (notification) {
      try {
        await axios.post("/api/notification/", notification, {
          headers: {
            Authorization: "Bearer " + user.token,
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
      } catch (err) {
        console.log(err);
      }
      setNotification("");
    }
  }

  async function sendPrivateMessage(e) {
    e.preventDefault();
    if (privateMessage && stompClientRef.current) {
      const chatMessage = {
        sender: username,
        receiver: targetUsername,
        content: privateMessage,
        type: "PRIVATE",
      };
      stompClientRef.current.publish({
        destination: "/app/chat.privateMessage",
        body: JSON.stringify(chatMessage),
      });
      setPrivateMessage("");
    }
  }

  return (
    <>
      <Container>
        <Header>
          <h2>Spring WebSocket Chat Demo</h2>
        </Header>
        <MessageArea ref={messageAreaRef}>
          {messageList?.map((m, i) =>
            m.type === "JOIN" || m.type === "LEAVE" ? (
              <Join key={i}>{m.content}</Join>
            ) : (
              <MessageWrapper key={i}>
                <Icon $bgcolor={getAvatarColor(m.sender)}>
                  <span>{m.sender[0].toUpperCase()}</span>
                </Icon>
                <Message>
                  <div>
                    <strong>{m.sender}</strong>
                  </div>
                  <div>{m.content}</div>
                </Message>
              </MessageWrapper>
            )
          )}
        </MessageArea>
        <form onSubmit={sendMessage}>
          <Box>
            <Input
              type="text"
              placeholder="Type a message..."
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </Box>
        </form>
      </Container>
      <Notification>
        <Header>
          <h2>Notification</h2>
        </Header>
        <form onSubmit={handleNotification}>
          <Box>
            <Input
              type="text"
              placeholder="Type a notification message..."
              autoComplete="off"
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </Box>
        </form>
      </Notification>
      <Notification>
        <Header>
          <h2>Private Message</h2>
        </Header>
        <form onSubmit={sendPrivateMessage}>
          <Box2>
            <Input
              type="text"
              placeholder="Type a private message..."
              autoComplete="off"
              value={privateMessage}
              onChange={(e) => setPrivateMessage(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Type username to send private message..."
              autoComplete="off"
              value={targetUsername}
              onChange={(e) => setTargetUsername(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </Box2>
        </form>
      </Notification>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default ChatPage;
