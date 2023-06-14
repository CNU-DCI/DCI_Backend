import React from "react";
import Map from "components/map/Map";
import styled from "@emotion/styled";

const ContainDiv = styled.div`
  width: 90%;
  height: 90%;
`;

function KakaoMap() {
  return (
    <ContainDiv>
      <Map />
    </ContainDiv>
  );
}

export default KakaoMap;
