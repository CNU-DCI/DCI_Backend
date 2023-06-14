import styled from "@emotion/styled";
import { Cart, SearchResult, SearchSubjectList } from "components/subjectlist";
import { CompareSubject, YearCompare } from "components/compare";
import { Navbar } from "components/navbar";
import Chaveron from "img/Chaveron.png";
import "styles/SubjectList.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom'; 
import footer from "img/footer.png";

const OuterDiv = styled.div`
  height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubjectListDiv = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 4vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

const DUMMY_DATA = [
  {
    subjectId: 1,
    subject: "알고리즘",
    grade: 3,
    sbjnum: "1215-1003",
    department: "공과대 컴퓨터융합학부",
    classification: "전공(기초)",
    professor: "김교수",
  },
  {
    subjectId: 2,
    subject: "자료구조",
    grade: 2,
    sbjnum: "1215-1004",
    department: "공과대 컴퓨터융합학부",
    classification: "전공(기초)",
    professor: "박교수",
  },
  {
    subjectId: 3,
    subject: "웹프로그래밍",
    grade: 2,
    sbjnum: "1215-1004",
    department: "공과대 컴퓨터융합학부",
    classification: "전공(기초)",
    professor: "박교수",
  },
];

const SubjectList = ({major}) => { 
  const outerDivRef = useRef();
  
  const [results, setResults] = useState(DUMMY_DATA);
  const [cart, setCart] = useState([]);
  
  //props from navbar, mostCom, keyword.jsx
  const location = useLocation();
  const [srcContents, setContents] = useState(
    location.state?.srcContents
  );

  useEffect(() => {
    console.log(cart);
    console.log(srcContents)
  }, [cart]);

  const addCart = (idx) => {
    const tmpResult = results[idx];
    setCart([...cart, tmpResult]);
  };

  const removeCart = (idx) => {};

  return (
    <>
      <Navbar></Navbar>
      <OuterDiv ref={outerDivRef}>
        <SubjectListDiv>
          <SearchSubjectList major={major}/>
          <SearchResult result={results} addCart={addCart} />
          <img src={Chaveron} alt="Chaveron" class="chaveron_icon" />
          <Cart outer={outerDivRef} result={cart} setResult={setCart} />
        </SubjectListDiv>
        <SubjectListDiv>
          <CompareSubject outer={outerDivRef} results={cart} />
          <YearCompare />
        </SubjectListDiv>
        <img src={footer} alt="footer" />
      </OuterDiv>
    </>
  );
};

export default SubjectList;
