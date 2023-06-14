import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const YearCompareDiv = styled.div`
  width: 80%;
  height: 55vh;
  border: 1px solid #888888;
`;

const CompareTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
`;

const ButtonsDiv = styled.div`
  width: 100%;
`;

const YearBtn = styled.button`
  width: 100px;
  height: 25px;
  margin: 0 5px;
  border: 1px solid #a4a4a4;
  background-color: ${({ clicked }) => (clicked ? "#51D2E3" : "white")};
  font-weight: bold;
`;

const YearCompare = () => {
  const [clicked, setClicked] = useState([false, false, false]);

  const activate = (e) => {
    const idx = e.target.dataset.idx;
    setClicked(clicked.map((data, i) => (i == idx ? !data : data)));
  };

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <YearCompareDiv>
      <CompareTitle>연도별 비교</CompareTitle>
      <ButtonsDiv>
        <YearBtn data-idx="0" clicked={clicked[0]} onClick={activate}>
          2020 전체
        </YearBtn>
        <YearBtn data-idx="1" clicked={clicked[1]} onClick={activate}>
          2021 전체
        </YearBtn>
        <YearBtn data-idx="2" clicked={clicked[2]} onClick={activate}>
          2022 전체
        </YearBtn>
      </ButtonsDiv>
    </YearCompareDiv>
  );
};

export default YearCompare;
