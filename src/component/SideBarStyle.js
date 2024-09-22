import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  display: inline-flex;
  height: 1080px;
  flex-direction: column;
  align-items: flex-start;
  background: #51515e;
  left: 0;
  top: 0;
`;

export const SidebarHeader = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #34343c;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #51515e;
  margin-bottom: 10px;
`;

export const MenuTitle = styled.span`
  color: #fff;
  font-family: NanumSquareOTF;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  cursor: pointer;
  align-self: flex-start;
  padding-left: 24px;
  padding: 10px 0px 10px 24px;
`;

export const SubMenu = styled.ul`
  display: flex;
  width: 320px;
  flex-direction: column;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 10px;
  background: #34343c;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style: none;
  margin: 0;
  padding-left: 24px;
`;

export const SubMenuItem = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 4px 0;
  &:hover {
    background-color: #45454d;
  }
`;
