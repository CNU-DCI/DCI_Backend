/*global kakao */
import React, { useEffect } from "react";
import styled from "@emotion/styled";

const ContentDiv = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.3676314, 127.3446617),
      level: 4,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(36.3676314, 127.3446617);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <ContentDiv id="map"></ContentDiv>;
}
