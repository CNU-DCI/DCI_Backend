import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Popup, SubjectList } from "./pages";
import styled from "@emotion/styled";
import "./App.css";
import { useEffect, useState } from "react";
import { getMajors } from "services/api";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [major, setMajor] = useState([]);

  useEffect(() => {
    getMajors().then(data => setMajor(data))
  }, []);

  return (
    <Background className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subjectList" element={<SubjectList major={major} />} />
          <Route path="/subject/:subjectId" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;