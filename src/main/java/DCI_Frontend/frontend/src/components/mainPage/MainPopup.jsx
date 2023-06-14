import React, { useState } from 'react';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PopupBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 1212;
`

const PopupContainer = styled.div`
  max-width: 60vw;
  height: 80vh;
  position: fixed;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s linear;
  z-index: 1313;
`
const PopupContents = styled.div`

`

const MainPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
      <>
        <PopupBG></PopupBG>
        <PopupContainer>
          
                    <PopupContents>
                      <h2 style={{color:"white", fontSize:"30px"}}>안녕하세요</h2>
                      <p>This is a popup with animation!</p>
                      <button onClick={togglePopup}>Close</button>
                    </PopupContents>
                  
        </PopupContainer>
      </>
        )}
    </>
    
  );
};

export default MainPopup;
