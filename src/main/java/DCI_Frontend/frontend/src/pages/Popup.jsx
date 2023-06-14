import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "styles/SubjectList.css";
import { MINT } from "constants/color";
import KakaoMap from "components/map/KakaoMap";
import { useParams } from "react-router";

const DeviceDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const TitleDiv = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const ParagraphDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

const SubjectTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  vertical-align: bottom;
  width: 130px;
  height: 40px;
`;

const TitleSub = styled.span`
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  vertical-align: bottom;
  padding-top: 20px;
`;

const TitleBackground = styled.div`
  background-color: #51d2e3;
  height: 30vh;
  width: 100%;
`;

const SummaryDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  place-items: center;
`;

const DetailDiv = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
`;

const SubjectDetailDiv = styled.div`
  width: 28%;
  height: 90%;
  background-color: white;
  margin-right: 2%;
`;

const SubjectResultDiv = styled.div`
  width: 70%;
  height: 90%;
  background-color: white;
`;

const TimeTableDiv = styled.div`
  width: 50%;
  height: 100%;
  border-right: 2px solid #3c73b9;
`;

const DetailTitleDiv = styled.div`
  width: 100%;
  height: 10%;
`;

const MapDiv = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

const Row = styled.div`
  width: 100%;
  height: 68%;
  margin-bottom: 2%;
  display: flex;
`;

const EvaluationDiv = styled.div`
  width: 90%;
  height: 20%;
  border-top: 2px solid #3c73b9;
  margin: 0 auto;
`;

const GraphDiv = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  margin-top: 2%;
  border-top: 1px solid #50d2e3;
`;

const ButtonRow = styled.div`
  width: 100%;
  height: 15%;
`;

const RowDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: ${({ alignItem }) => alignItem};
`;

const ContentTitleDiv = styled.div`
  width: 90%;
  height: 10%;
`;

const ContentTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5%;
  box-sizing: border-box;
`;

const ContentTitleSpan = styled.span`
  font-weight: 15px;
  font-weight: bold;
  color: #50d2e3;
`;

const SelectDiv = styled.div`
  height: 25px;
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

const PeriodBtn = styled.button`
  height: 25px;
  width: 120px;
  text-align: center;
  border: 1px solid black;
  background-color: white;
  margin-right: 10px;
  font-weight: bold;
`;

const Popup = () => {
  const { subjectId } = useParams();

  return (
    <DeviceDiv>
      <TitleBackground>
        <TitleDiv>
          <ParagraphDiv>
            <SubjectTitle>공학윤리</SubjectTitle>
            <TitleSub>과목의 분석 결과</TitleSub>
          </ParagraphDiv>
          <SummaryDiv>
            <SubjectDetailDiv></SubjectDetailDiv>
            <SubjectResultDiv></SubjectResultDiv>
          </SummaryDiv>
        </TitleDiv>
      </TitleBackground>
      <DetailDiv className="subjectDetail">
        <DetailTitleDiv></DetailTitleDiv>
        <Row>
          <TimeTableDiv></TimeTableDiv>
          <MapDiv>
            <ContentTitleDiv>
              <ContentTitle>
                <ContentTitleSpan>강의실</ContentTitleSpan> 공과대학 1호관 401호
              </ContentTitle>
            </ContentTitleDiv>
            <KakaoMap />
          </MapDiv>
        </Row>
        <EvaluationDiv></EvaluationDiv>
      </DetailDiv>
      <GraphDiv>
        <ButtonRow>
          <RowDiv alignItem="end">
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
          <RowDiv alignItem="center">
            <PeriodBtn>본수강신청</PeriodBtn>
            <PeriodBtn>전학년 수강신청</PeriodBtn>
            <PeriodBtn>정정기간</PeriodBtn>
          </RowDiv>
        </ButtonRow>
      </GraphDiv>
    </DeviceDiv>
  );
};

export default Popup;
