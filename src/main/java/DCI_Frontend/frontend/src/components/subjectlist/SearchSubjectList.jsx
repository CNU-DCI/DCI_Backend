import styled from "@emotion/styled";
import { MINT } from "../../constants/color";
import { FaSistrix } from "react-icons/fa";
import "../../styles/SubjectList.css";
import { useEffect, useState } from "react";
import { search } from "services/api";

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

const cdnList = [
  '교양(공통기초)', '교직', '일반선택', '교양(일반)', '전공(기초)', '전공(핵심)', '전공(심화)'
]

const SearchSubjectList = ({major, setResults}) => {
  const [query, setQuery] = useState([]);

  const [selectedMajor, setSelectedMajor] = useState([]);
  const selectCollege = (e) => {
    const college = e.target.value;
    const title = e.target.dataset.title;
    setSelectedMajor(major[college].majors);
    setQuery({...query, [title]: major[college].college})
  }

  const Search = async () => {
    const res = await search(query);
    setResults(res);
  }

  const changeQuery = (e) => {
    const title = e.target.dataset.title;
    const value = e.target.value;
    setQuery({...query, [title]: value})
  }

  const textInput = (e) => {
    const value = e.target.value;
    setQuery({...query, keyword: value});
  }

  return (
    <SearchSubjectDiv>
      <ContentDiv>
        <RowDiv>
          <SelectDiv>
            <SelectSection data-title="year" min={60} onChange={changeQuery}>
              <option value="null" selected disabled>---</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </SelectSection>
            <SelectP>년도</SelectP>
          </SelectDiv>
          <SelectDiv>
            <SelectSection data-title="shmt" min={50}  onChange={changeQuery}>
              <option value="null" selected disabled>---</option>
              <option value="1학기">1학기</option>
              <option value="2학기">2학기</option>
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SelectDiv min={200}>
            <SelectP>이수구분</SelectP>
            <SelectSection data-title="cdn"  onChange={changeQuery}>
              <option value="null" selected disabled>---</option>
              {cdnList.map((m, idx) => (
                <option value={m}>{m}</option>
              ))}
            </SelectSection>
          </SelectDiv>
          <SelectDiv min={220}>
            <SelectP>단과대</SelectP>
            <SelectSection data-title="colg" onChange={selectCollege}>
              <option value="null" selected disabled>---</option>
              {
                major.map((m, idx) => (
                  <option value={idx} key={idx}>{m.college}</option>
                ))
              }
            </SelectSection>
          </SelectDiv>
          <SelectDiv  min={200}>
            <SelectP>학과</SelectP>
            <SelectSection data-title="dn" onChange={changeQuery}>
              <option value="null" disabled selected>---</option>
              {
                selectedMajor.length !== 0 && (
                  selectedMajor.map((m, idx) => (
                    <option value={m} key={idx}>{m}</option>
                  ))
                )
              }
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SearchSection min={400} >
            <SearchInput
              type="text"
              placeholder="과목명, 교수명으로 검색해보세요"
              onChange={textInput}
            />
            <FaSistrix class="magnify_icon" onClick={Search}/>
          </SearchSection>
        </RowDiv>
      </ContentDiv>
    </SearchSubjectDiv>
  );
};

export default SearchSubjectList;
