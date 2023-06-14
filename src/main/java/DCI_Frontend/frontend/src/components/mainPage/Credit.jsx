import styled from "@emotion/styled";
import {Icons} from 'constants/layout';
import { Layout60vw } from "constants/layout";
import { MainContainer } from "constants/layout";
import { ReactComponent as Computer } from "img/Computer.svg";
import kitty from 'img/kitty.jpg'
import bunny from 'img/bunny.jpg'
import puppy from 'img/puppy.jpg'

const MemberContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;

  &:nth-child(2n){
    justify-content: flex-end;
    text-align: right;
  }
`

const IMG = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: blue;
  over-flow: hidden;
  box-shadow: inset 0 0 15px 15px #bdd;
  margin: 0 30px;


`

const TextBox = styled.div`
  h4{
    opacity: 0.6;
  }

  h2{
    margin-bottom: 20px;
    margin-left: -5px;
    margin-right: -5px;
  }
`
const Credit = () => {


  return(
    <Layout60vw>
      <Icons>
        <Computer />
      </Icons>
      <h2>Credit</h2>
      <MainContainer>
        <MemberContainer>
          <IMG src={kitty}></IMG>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱전소영🐱</h2>
            <p>이번 프로젝트에서 프론트엔드를 담당했습니다. <br/>
                    우리 팀원들 수고했어!</p>
          </TextBox>
        </MemberContainer>
        <MemberContainer>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱전소영🐱</h2>
            <p>이번 프로젝트에서 프론트엔드를 담당했습니다. <br/>
                    우리 팀원들 수고했어!</p>
          </TextBox>
          <IMG src={bunny}></IMG>
          
        </MemberContainer>
        <MemberContainer>
          <IMG src={puppy}></IMG>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱전소영🐱</h2>
            <p>이번 프로젝트에서 프론트엔드를 담당했습니다. <br/>
                    우리 팀원들 수고했어!</p>
          </TextBox>
        </MemberContainer>
        <MemberContainer>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱전소영🐱</h2>
            <p>이번 프로젝트에서 프론트엔드를 담당했습니다. <br/>
                    우리 팀원들 수고했어!</p>
          </TextBox>
          <IMG src={kitty}></IMG>
        </MemberContainer>
        <MemberContainer>
          <IMG src={kitty}></IMG>
          <TextBox>
            <h4>Special Thanks to</h4>
            <h2>🐱조윤선🐱</h2>
            <p>디자인 조언에 참여했습니다.
              너무 멋진 프로젝트에 <br /> 기여할 수 있어서 재밌는 시간이였습니다. 하하!</p>
          </TextBox>
          
        </MemberContainer>
      </MainContainer>
    </Layout60vw>
  );
}

export default Credit;