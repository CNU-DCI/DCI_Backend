import React, { useEffect, useRef, useState} from "react";
import { Route, Link, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";
import header from "img/header.png";
import { useLocation } from 'react-router-dom'; 

const MenuArea = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  align-items: center;

  a {
    margin-right: 25px;
    transition: 0.3s;
  }

  a:hover {
    font-weight: bold;
    color: white;
  }
`;
const SrcBox = styled.div`
  width: 12vw;
  height: 24px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  color: #072a5f;
  border:none;
  font-size: 0.8rem;
  margin-left: 10%;
  width: 85%;

  &:focus {
    outline: none;
    color: black;
  }
`;

const LogoClick = styled.div`
  width: 18vw;
  height: 80px;
  position: absolute;
  top: 0;
  left: 10vw;
`


const Navbar = () => {
  const [srcContent, setSrcContent] = useState('');
  const updateSearchBox = e => setSrcContent(e.target.value);

  const Srcbox = useRef();
  const navigate = useNavigate();

  const handleSrc = () => {
    //두 글자 이상일때만 props 던지기
    const srcContents = Srcbox.current.value;
    if(srcContents.length < 2){
      alert("두 글자 이상을 입력해주세요")
    } else{
      navigate("/subjectList", {
        state: {
          srcContents: srcContents
        }
      });
    }
  }

  const location = useLocation();
  console.log(location);

  return (
    <div style={{ position: "fixed", zIndex: "111"}}>
      <img src={header} style={{ width: "100vw" }}></img>
      <Link to="/">
        <LogoClick></LogoClick>
      </Link>
      <MenuArea>
        <Link to="/">홈</Link>
        <Link to="/subjectList">과목검색</Link>
        {
          location.pathname == "/"
          ? <SrcBox>
              <SearchInput
                contentEditable="true"
                placeholder="과목명으로 검색하기"
                maxLength="10"

                value={srcContent}
                onChange={updateSearchBox}

                ref={Srcbox}
              ></SearchInput>
              <FaSistrix style={{ marginRight: "10px", color:"#072A5F" }}
              
              onClick={handleSrc}
              />
            </SrcBox>
          : <p style={{color:"yellow", fontSize:"16px"}}>다음수강신청까지 D-255</p>
        }
        
      </MenuArea>
    </div>
  );
};

export default Navbar;
