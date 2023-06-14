import React, { useEffect, useRef, useState} from "react";
import { Route, Link, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import ReactWordcloud from 'react-wordcloud';
import { Icons } from 'constants/layout';
import { Layout60vw } from "constants/layout";
import { MainContainer } from 'constants/layout';
import { ReactComponent as Search } from "img/Search.svg";


const keywords_dummy = [
  {
    text: "인간관계론",
    value: 1
  },
  {
    text: "공학윤리",
    value: 1,
  },
  {
    text: "대학영어1",
    value: 2,
  },
  {
    text: "코딩과 삶",
    value: 2,
  },
  {
    text: "아프리카 사회와 문화",
    value: 2,
  },
  {
    text: "모빌리티",
    value: 2,
  },
  {
    text: "기초한문",
    value: 2,
  },
  {
    text: "AI 활용 표현과 문제해결",
    value: 3,
  },
  {
    text: "기초글쓰기",
    value: 3,
  },
  {
    text: "행정학원론",
    value: 3,
  },{
    text: "인간관계론",
    value: 1
  },
  {
    text: "공학윤리",
    value: 1,
  },
  {
    text: "대학영어1",
    value: 2,
  },
  {
    text: "코딩과 삶",
    value: 2,
  },
  {
    text: "아프리카 사회와 문화",
    value: 2,
  }
];

const callbacks = {
  // onWordClick: console.log,
  onWordMouseOver: '',
  getWordTooltip: word => ``,
}
const options = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontSizes: [15, 35],
  fontFamily: 'KBO-Dia-Gothic_bold',
  colors: ['#50D2E3', '#FFEE64', '#0A4399'],
};
const size = [600, 450];

const WordCloudStyle = styled.div`
  background-color: rgba(81, 210, 227, 0.16);
  border-radius: 15px;
`

const Keywords = () => {
  const [keywords, setKeyword] = useState(keywords_dummy);

  const navigate = useNavigate();

  const ReceiveProps = e => {
    const keyword = e.target.textContent;
    navigate("/subjectList", {
            state: {
              srcContents: keyword
            }
          });
  }

  const OnMouseOver = e => {
    const keyword = e.target.textContent;
    //add cursor pointer
  }

  return(
    <Layout60vw>
      <Icons>
        <Search></Search>
      </Icons>
      <h2>많이 검색된 키워드</h2>
      <h5 style={{color: "#616161"}}>2023.05.27. 16:00시 기준</h5>

      <MainContainer style={{marginTop: "3vw"}}>
        <WordCloudStyle>
          <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={keywords_dummy}
          maxSize={[600, 450]}
          onClick={ReceiveProps}
          onMouseOver={OnMouseOver}

          style={{display:"inline-block"}}
          />
        </WordCloudStyle>
          
      </MainContainer>
    </Layout60vw>
  );
}

export default Keywords;