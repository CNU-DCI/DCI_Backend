import styled from "@emotion/styled";
import { MINT } from "../../constants/color";
import { FaSistrix } from "react-icons/fa";
import "../../styles/SubjectList.css";

const SearchSubjectDiv = styled.div`
  width: 100%;
  height: 25vh;
  border-bottom: 1px solid ${MINT};
  display: flex;
  justify-content: center;
  place-items: center;
  box-sizing: border-box;
`;

const ContentDiv = styled.div`
  width: 50%;
`;

const RowDiv = styled.div`
  display: flex;
  margin: 10px 0;
`;

const SelectDiv = styled.div`
  border: 1px solid ${MINT};
  margin-right: 10px;
  min-width: ${({ min }) => min + "px"};
`;

const SelectSection = styled.select`
  border: none;
  font-size: 15px;
  font-weight: bold;
  min-width: ${({ min }) => min + "px"};
`;

const SelectP = styled.p`
  font-size: 15px;
  display: inline-block;
  margin: 0;
  padding: 0 5px;
  color: #888888;
`;

const SearchSection = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${MINT};
  border-radius: 50px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  min-width: ${({ min }) => min + "px"};
  display: flex;
  justify-content: center;
  place-items: center;
`;

const SearchInput = styled.input`
  margin-left: 5%;
  color: #888888;
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  width: 90%;
  border: none;
  white-space: nowrap;
  background-color: inherit;
  &:focus {
    outline: none;
    color: black;
  }
`;

const SearchSubjectList = () => {
  return (
    <SearchSubjectDiv>
      <ContentDiv>
        <RowDiv>
          <SelectDiv>
            <SelectSection min={60}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </SelectSection>
            <SelectP>년도</SelectP>
          </SelectDiv>
          <SelectDiv>
            <SelectSection min={50}>
              <option value="first_semester">1학기</option>
              <option value="summer_season">하기계절</option>
              <option value="second_semester">2학기</option>
              <option value="winter_season">동기계절</option>
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SelectDiv min={170}>
            <SelectP>이수구분</SelectP>
            <SelectSection>
              <option value="2023">교양</option>
              <option value="2023">전공(기초)</option>
            </SelectSection>
          </SelectDiv>
          <SelectDiv min={220}>
            <SelectP>학과</SelectP>
            <SelectSection>
              <option value="1학기">공과대 컴퓨터융합학부</option>
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SearchSection min={400}>
            <SearchInput
              type="text"
              placeholder="과목명, 교수명으로 검색해보세요"
            />
            <FaSistrix class="magnify_icon" />
          </SearchSection>
        </RowDiv>
      </ContentDiv>
    </SearchSubjectDiv>
  );
};

export default SearchSubjectList;
