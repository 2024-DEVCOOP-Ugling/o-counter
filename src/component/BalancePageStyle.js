import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: 340px;
  width: 1010px;
  height: 1003px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const Overlay = styled.div`
  position: pixed;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
`;
