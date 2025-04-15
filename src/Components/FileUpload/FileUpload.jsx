import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Login, { useUserStore } from "./Login";

const Container = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
`;
const Input = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  outline: none;
`;
const Box = styled.div`
  width: 50%;
  min-height: 100px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;
const Button = styled.button`
  width: 50%;
  height: 40px;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function FileUpload() {
  const { user, isLoggedIn, login, logout } = useUserStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  function handleChange(event) {
    console.log(event.target.files);
    setSelectedFiles(event.target.files);
  }

  async function handleUploadButton() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (selectedFiles) {
      Array.from(selectedFiles).map((f) => formData.append("files", f));
    }
    try {
      await axios.post("/api/upload", formData, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });

      for (const f of selectedFiles) {
        const response = await axios.get("/api/download/" + f.name, {
          responseType: "blob",
          headers: {
            Authorization: "Bearer " + user.token,
          },
        });
        const url = URL.createObjectURL(response.data);
        setImgUrl((prev) => [...prev, url]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    return () => {
      console.log("메모리 정리 blob URLs:", imgUrl);
      imgUrl.forEach((url) => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imgUrl]);

  return (
    <div>
      {isLoggedIn ? (
        <Container>
          <h1>File Upload</h1>
          <p>이미지를 선택하여 서버로 업로드합니다.</p>
          <Input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="내용을 적어주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input multiple type="file" onChange={handleChange} />
          <Box>
            {selectedFiles
              ? Array.from(selectedFiles).map((file, i) => (
                  <div key={i}>
                    <div style={{ color: "dodgerblue" }}>{file.name}</div>
                    <img src={imgUrl[i]} />
                  </div>
                ))
              : null}
          </Box>
          <Button onClick={handleUploadButton}>Upload</Button>
        </Container>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default FileUpload;
