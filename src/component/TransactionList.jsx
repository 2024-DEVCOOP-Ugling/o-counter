import React from "react";
import * as S from "./TransactionStyles";

const transactions = [
  { date: "2024.08.19", type: "충전", amount: +3000, balance: 6100 },
  { date: "2024.08.19", type: "환불", amount: -3000, balance: 6100 },
  { date: "2024.08.19", type: "결제", amount: -3000, balance: 6100 },
];

const TransactionList = () => {
  return (
    <S.Container>
      {transactions.map((transaction, index) => (
        <S.TransactionItem key={index}>
          <S.DateText>{transaction.date}</S.DateText>
          <S.AmountText>
            {transaction.amount}원 {transaction.type}
          </S.AmountText>
          <S.BalanceText amount={transaction.amount}>
            {transaction.amount > 0
              ? `+${transaction.amount}원`
              : `${transaction.amount}원`}{" "}
            {transaction.balance}원
          </S.BalanceText>
        </S.TransactionItem>
      ))}
    </S.Container>
  );
};

export default TransactionList;
