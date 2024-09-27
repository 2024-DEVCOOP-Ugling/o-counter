import styled from "styled-components";

export const Money = styled.div`
  display: flex;
  padding: 48px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  background: #fff;
`;
export const TopNameMoney = styled.div`
  display: flex;
  width: 263px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const VarcodeName = styled.span`
  color: #000;
  font-family: NanumSquareOTF;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
`;

export const TotalBalance = styled.span`
  color: #000;
  font-family: NanumSquareOTF;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Charge = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 6px;
`;

export const CharegIn = styled.input`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #f2f2f2;
  color: #808080;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChargeBut = styled.button`
  display: flex;
  height: 53px;
  padding: 4px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #f49e15;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
