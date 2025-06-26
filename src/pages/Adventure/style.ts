import styled from "styled-components";

export const BackStage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const GoogleMapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // 맵의 기본 레이어
`;

export const Container = styled.div`
  position: absolute;
  top: 2vw;
  left: 2vw;
  z-index: 2; // 사이드바가 맵 위로 올라오도록 설정
`;

export const InfoPopup = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
  z-index: 3; // 정보 창이 사이드바보다 위로 올라오도록 설정
`;
