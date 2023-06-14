import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";


const Dday_dummy = [
  {
    "year": 2023,
    "semester": 1,
    "period": ["2023. 08. 01", "2023. 08. 32"],
    "Dday": 64
  },
  {
    "year": 2023,
    "semester": 2,
    "period": ["2023. 13. 01", "2023. 13. 30"],
    "Dday": 225
  },
  {
    "year": 2024,
    "semester": 1,
    "period": ["2024. 01. 01", "2024. 01. 21"],
    "Dday": 364
  },
  {
    "year": 2024,
    "semester": 2,
    "period": ["2024. 11. 11", "2024. 11. 23"],
    "Dday": 671
  }
]


const DdayContainer = styled.div`
  width: 100%;
  height: 8vh;
  margin-top: 2vh;
  border-radius: 70px;
  background-color: #072A5F;
  color: white;
  display: flex;
  align-items: center;
` 
const DdayUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p{
    font-size: 35px;

  }
`

const SDdayLi = styled.li`
  width: 18vw;
  font-size: 1.2rem;
  text-align: center;
`
const LDdayLi = styled.li`
  width: 20vw;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
`

const Dday = () => {
  const [Dday, setDday] = useState(Dday_dummy);
  const [count, setCount] = useState(0);


  function useInterval(callback, delay) {
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
  
    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if (delay !== null) { // 만약 delay가 null이 아니라면 
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  }

  useInterval(() => {
    setCount(count + 1);
    if(count === Dday_dummy.length - 1){
      setCount(0);
    }
  }, 4000);



  return(
    <>
      <DdayContainer>
            <DdayUl>
              <SDdayLi>다음 일정</SDdayLi>
              <p>|</p>
              <LDdayLi>{Dday[count].year}년도 {Dday[count].semester}학기 수강신청</LDdayLi>
              <SDdayLi>{Dday[count].period[0]} - {Dday[count].period[1]}</SDdayLi>
              <p>|</p>
              <LDdayLi>D - {Dday[count].Dday}</LDdayLi>
            </DdayUl>
        </DdayContainer>
    </>
  );
}

export default Dday;