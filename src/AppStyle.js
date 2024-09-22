import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
`;
export const MainBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const UserSelect = styled.span`
  color: #000;
  font-family: NanumSquareOTF;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

export const StudentBarcode = styled.div`
  display: flex;
  width: 700px;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #f2f2f2;
  color: var(--Gray---02, #808080);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
