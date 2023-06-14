import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {Layout80vw} from 'constants/layout';
import { Navbar } from "components/navbar/index";
import { Dday, Credit, Keywords, MostCompetition, Slider, MainPopup} from 'components/mainPage/index'
import footer from 'img/footer.png'



const Footer = styled.div`
  margin-top: 8vw;
`

const Main = () => {
  return (
    <>
      <MainPopup></MainPopup>
      <Navbar />
      <Slider></Slider>
      <Layout80vw>
        <Dday />
        <MostCompetition></MostCompetition>
        <Keywords></Keywords>
        <Credit></Credit>
      </Layout80vw>
      <Footer>
        <img src={footer}></img>
      </Footer>
    </>
  );
};

export default Main;
