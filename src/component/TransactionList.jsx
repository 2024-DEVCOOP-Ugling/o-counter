import React from "react";
import * as S from "./TransactionStyles";

const transactions = [
  { date: "2024.08.19", type: "충전", amount: +3000, balance: 6100 },
  { date: "2024.08.19", type: "환불", amount: -3000, balance: 6100 },
  { date: "2024.08.19", type: "결제", amount: -3000, balance: 6100 },
];

const TransactionList = () => {
  const transaction = transactions[0]; // 첫 번째 트랜잭션만 표시

  return (
    <S.Log>
      <S.Container>
        <S.DateText>{transaction.date}</S.DateText>
        <S.AmountText>
          {transaction.amount}원 {transaction.type}
        </S.AmountText>
      </S.Container>
      <S.ReMainMoney>
        <S.BalanceText amount={transaction.amount}>
          <S.InDeMoney>
            {transaction.amount > 0
              ? `+${transaction.amount}원`
              : `${transaction.amount}원`}
          </S.InDeMoney>
          <S.TotalMoney>{transaction.balance}원</S.TotalMoney>
        </S.BalanceText>
      </S.ReMainMoney>
    </S.Log>
  );
};

export default TransactionList;
