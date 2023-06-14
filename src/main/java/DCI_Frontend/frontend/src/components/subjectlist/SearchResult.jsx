import styled from "@emotion/styled";
import { FaSistrix, FaShoppingBag } from "react-icons/fa";

import "../../styles/SubjectList.css";

const ContentDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  place-items: center;
`;

const SearchResultDiv = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
`;

const SearchResultTitle = styled.div`
  width: 100%;
`;

const SearchResultTitleP = styled.p`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const ResultCountP = styled.p`
  font-size: 13px;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const ResultTableDiv = styled.div`
  width: 100%;
  min-width: 600px;
`;

const ResultTableBody = styled.div`
  width: 100%;
  height: 15vh;
  overflow-y: scroll;
`;

const ResultHead = styled.div`
  width: 95%;
  background-color: #d9d9d9;
  border-radius: 19px;
  margin-bottom: 5px;
  height: 30px;
  display: flex;
  place-items: center;
`;

const ResultBodyDiv = styled.div`
  width: 100%;
  display: flex;
`;

const ResultBody = styled.div`
  width: 95%;
  height: 30px;
  border-radius: 19px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  margin-bottom: 3px;
  display: flex;
  place-items: center;
  :hover {
    background-color: #fffddd;
  }
`;

const ResultTableP = styled.p`
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const IconDiv = styled.div`
  width: 5%;
  height: 100%;
  margin: auto;
`;

const SearchResult = ({ result, addCart }) => {
  const PutIn = (e) => {
    const idx = e.currentTarget.dataset.idx;
    addCart(idx);
  };

  const showDetail = () => {};

  return (
    <ContentDiv>
      <SearchResultDiv>
        <SearchResultTitle>
          <SearchResultTitleP>
            <FaSistrix class="title_magnify_icon" size="24" />
            검색결과
          </SearchResultTitleP>
          <ResultCountP>총 {result.length}개</ResultCountP>
        </SearchResultTitle>
        <ResultTableDiv>
          {result.length !== 0 && (
            <ResultHead>
              <ResultTableP style={{ width: "25%" }}>과목명</ResultTableP>
              <ResultTableP style={{ width: "5%" }}>학년</ResultTableP>
              <ResultTableP style={{ width: "20%" }}>과목번호</ResultTableP>
              <ResultTableP style={{ width: "25%" }}>개설학과</ResultTableP>
              <ResultTableP style={{ width: "15%" }}>이수구분</ResultTableP>
              <ResultTableP style={{ width: "10%" }}>담당교수</ResultTableP>
            </ResultHead>
          )}
          <ResultTableBody className="resultTable">
            {result.map((subjects, idx) => (
              <ResultBodyDiv key={idx}>
                <ResultBody onClick={showDetail}>
                  <ResultTableP style={{ width: "25%" }}>
                    {subjects.subject}
                  </ResultTableP>
                  <ResultTableP style={{ width: "5%" }}>
                    {subjects.grade}
                  </ResultTableP>
                  <ResultTableP style={{ width: "20%" }}>
                    {subjects.sbjnum}
                  </ResultTableP>
                  <ResultTableP style={{ width: "25%" }}>
                    {subjects.department}
                  </ResultTableP>
                  <ResultTableP style={{ width: "15%" }}>
                    {subjects.classification}
                  </ResultTableP>
                  <ResultTableP style={{ width: "10%" }}>
                    {subjects.professor}
                  </ResultTableP>
                </ResultBody>
                <IconDiv>
                  <FaShoppingBag
                    data-idx={idx}
                    size="24"
                    class="shopping_icon"
                    onClick={PutIn}
                    style={{ cursor: "pointer" }}
                  />
                </IconDiv>
              </ResultBodyDiv>
            ))}
          </ResultTableBody>
        </ResultTableDiv>
      </SearchResultDiv>
    </ContentDiv>
  );
};

export default SearchResult;
