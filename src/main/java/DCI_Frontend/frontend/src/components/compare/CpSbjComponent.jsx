import styled from "@emotion/styled";
import X from "img/X.png";

const CompareSbjDiv = styled.div`
  width: 250px;
  height: 95%;
  border: 1px solid #d9d9d9;
  display: inline-block;
  margin-right: 10px;
`;

const RowDiv = styled.div`
  width: 100%;
`;

const ColumnDiv = styled.div`
  width: 90%;
  height: 100%;
  display: inline-block;
`;

const CompeteDiv = styled.div`
  width: 80px;
  color: white;
  background-color: #ff3838;
  font-size: 13px;
  text-align: center;
  display: inline-block;
  margin: 0 5px;
`;

const SubjectTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const SubjectDetail = styled.p`
  font-size: 10px;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const CountDiv = styled.div`
  width: 70px;
  height: 60px;
  text-align: center;
  display: inline-block;
  border: 1px solid #a4a4a4;
  margin-left: 5px;
  margin-top: 10px;
`;

const CountTextDiv = styled.div`
  width: 70px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
`;

const TimeDiv = styled.div`
  width: 160px;
  height: 60px;
  text-align: center;
  display: inline-block;
  border: 1px solid #a4a4a4;
  margin-left: 5px;
`;

const TimeTextDiv = styled.div`
  width: 160px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
`;

const DataP = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
`;

const CpSbjComponent = ({ key, data }) => {
  return (
    <CompareSbjDiv key={key}>
      <RowDiv>
        <ColumnDiv>
          <CompeteDiv>높은 경쟁률</CompeteDiv>
        </ColumnDiv>
        <img
          src={X}
          alt="x"
          style={{
            width: 13,
            height: 13,
            margin: 0,
            padding: 0,
            display: "inline-block",
          }}
        />
      </RowDiv>
      <RowDiv>
        <SubjectTitle>{data.subject}</SubjectTitle>
        <SubjectDetail>{data.sbjnum}</SubjectDetail>
      </RowDiv>
      <SubjectDetail>{data.department}</SubjectDetail>
      <RowDiv>
        <CountDiv>
          <DataP>3명</DataP>
        </CountDiv>
        <TimeDiv>
          <DataP>6분 45초</DataP>
        </TimeDiv>
      </RowDiv>
      <RowDiv>
        <CountTextDiv>
          <SubjectDetail>정정횟수</SubjectDetail>
        </CountTextDiv>
        <TimeTextDiv>
          <SubjectDetail>마감시간</SubjectDetail>
        </TimeTextDiv>
      </RowDiv>
    </CompareSbjDiv>
  );
};

export default CpSbjComponent;
