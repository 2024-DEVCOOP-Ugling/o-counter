import React from "react";
import * as S from "./TopSectionStyle";

const TopSection = () => {
  return (
    <S.Money>
      <S.TopNameMoney>
        <S.VarcodeName>2023049 이예훈</S.VarcodeName>
        <S.TotalBalance>5,750 원</S.TotalBalance>
      </S.TopNameMoney>
      <S.Charge>
        <S.CharegIn placeholder="충전 금액을 입력해주세요" />
        <S.ChargeBut>충전</S.ChargeBut>
      </S.Charge>
    </S.Money>
  );
};

export default TopSection;
