import styled from "@emotion/styled";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa";

import "../../styles/SubjectList.css";

const ContentDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
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
  background-color: #072a5f;
  color: white;
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
  cursor: pointer;
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

const ButtonsDiv = styled.div`
  width: 80%;
  text-align: right;
`;

const ResetBtn = styled.button`
  background-color: #d9d9d9;
  border: none;
  width: 50px;
  border-radius: 20px;
`;

const CompareBtn = styled.button`
  margin-left: 15px;
  background-color: #072a5f;
  border: none;
  color: white;
  width: 100px;
  border-radius: 20px;
  margin-right: 5%;
`;

const Cart = ({ outer, result, setResult }) => {
  const moveComparePage = () => {
    if (result.length !== 0) {
      const pageHeight = window.innerHeight;
      const DIVIDER_HEIGHT = 5;
      outer.current.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.alert("장바구니가 비어있습니다.");
    }
  };

  const removeItem = (e) => {
    const idx = e.currentTarget.dataset.idx;
    const removedList = result.filter(r => r.subjectID !== idx)
    setResult(removedList)
  };

  const removeResults = () => {
    if (result.length !== 0) {
      setResult([]);
    } else {
      window.alert("장바구니가 비어있습니다.");
    }
  };

  const showDetail = (e) => {
    const idx = e.currentTarget.dataset.key;
    window.open(`/subject/${idx}`, "_blank");
  };


  return (
    <ContentDiv>
      <SearchResultDiv>
        <SearchResultTitle>
          <SearchResultTitleP>
            <FaShoppingBag size="24" class="title_shopping_icon" />
            장바구니
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
              <ResultBodyDiv key={subjects.subjectID}>
                <ResultBody onClick={showDetail}>
                  <ResultTableP style={{ width: "25%" }}>
                    {subjects.openSbjtNm}
                  </ResultTableP>
                  <ResultTableP style={{ width: "5%" }}>
                    {subjects.trgtShyr}
                  </ResultTableP>
                  <ResultTableP style={{ width: "20%" }}>
                    {subjects.openSbjtNo}
                  </ResultTableP>
                  <ResultTableP style={{ width: "25%" }}>
                    {subjects.degrNmSust}
                  </ResultTableP>
                  <ResultTableP style={{ width: "15%" }}>
                    {subjects.cptnDivNm}
                  </ResultTableP>
                  <ResultTableP style={{ width: "10%" }}>
                    {subjects.profInfo}
                  </ResultTableP>
                </ResultBody>
                <IconDiv>
                  <FaTrashAlt
                    size="24"
                    class="trash_icon"
                    data-idx={subjects.subjectID}
                    onClick={removeItem}
                  />
                </IconDiv>
              </ResultBodyDiv>
            ))}
          </ResultTableBody>
        </ResultTableDiv>
      </SearchResultDiv>
      <ButtonsDiv>
        <ResetBtn onClick={removeResults}>리셋</ResetBtn>
        <CompareBtn onClick={moveComparePage}>비교하기</CompareBtn>
      </ButtonsDiv>
    </ContentDiv>
  );
};

export default Cart;
