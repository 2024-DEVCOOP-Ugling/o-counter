import React from "react";
import TopSection from "./TopSection";
import TransactionList from "./TransactionList";
import * as S from "./BalancePageStyle";
import Sidebar from "./SideBar";

const BalancePage = () => {
  const transactionComponents = Array(12).fill(<TransactionList />);

  const leftSide = transactionComponents.slice(0, 6);
  const rightSide = transactionComponents.slice(6, 12);

  return (
    <S.Overlay>
      <S.MainContainer>
        <Sidebar />
        <TopSection />
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {leftSide.map((comp, i) => (
              <div key={i}>{comp}</div>
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {rightSide.map((comp, i) => (
              <div key={i}>{comp}</div>
            ))}
          </div>
        </div>
      </S.MainContainer>
    </S.Overlay>
  );
};

export default BalancePage;
