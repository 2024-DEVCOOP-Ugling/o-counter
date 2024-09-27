import styled from "styled-components";

export const Log = styled.div`
  display: flex;
  padding: 16px;
  margin-left: 28px;
  width: 420px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #fff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ReMainMoney = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DateText = styled.span`
  color: #000;
  font-family: NanumSquareOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AmountText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BalanceText = styled.span`
  color: ${({ amount }) => (amount > 0 ? "#f49e15" : "#999")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InDeMoney = styled.span`
  color: #f49e15;
  font-family: NanumSquareOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TotalMoney = styled.span`
  color: #ccc;
  font-family: NanumSquareOTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
