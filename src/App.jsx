import React from "react";
import Oring from "./img/o-ring-logo.png";
import { createGlobalStyle } from "styled-components";
import * as S from "./AppStyle";
import Sidebar from "./component/SideBar";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <S.Container>
        <S.MainBox>
          <S.Logo>
            <img src={Oring} alt="main-logo" />
          </S.Logo>
          <S.UserSelect>사용자 조회</S.UserSelect>
          <S.StudentBarcode>학생증 바코드를 찍어주세요</S.StudentBarcode>
        </S.MainBox>
      </S.Container>
    </>
  );
}

export default App;
