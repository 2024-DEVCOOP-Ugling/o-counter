import React, { useState } from "react";
import Oring from "./img/o-ring-logo.png";
import { createGlobalStyle } from "styled-components";
import * as S from "./AppStyle";
import Sidebar from "./component/SideBar";
import BalancePage from "./component/BalancePage";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState("none");

  return (
    <>
      <GlobalStyle />
      <Sidebar /> {/* Sidebar는 항상 표시 */}
      {currentPage !== "balance" && (
        <S.Container>
          <S.MainBox>
            <S.Logo>
              <img src={Oring} alt="main-logo" />
            </S.Logo>
            <S.UserSelect>사용자 조회</S.UserSelect>
            <S.StudentBarcode onClick={() => setCurrentPage("balance")}>
              학생증 바코드를 찍어주세요
            </S.StudentBarcode>
          </S.MainBox>
        </S.Container>
      )}
      {currentPage === "balance" && <BalancePage />}{" "}
      {/* 클릭 시 BalancePage가 나타남 */}
    </>
  );
}

export default App;
