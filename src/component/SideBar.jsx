import React, { useState } from "react";
import Ocount from "../img/Ocount.png";
import * as S from "./SideBarStyle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    occount: false,
    inventory: false,
    finance: false,
    members: false,
    settings: false,
  });

  const toggleMenu = (menu) => {
    setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <S.Sidebar>
        <S.SidebarHeader>
          <img src={Ocount} alt="Ocount-admin" />
        </S.SidebarHeader>

        <S.MenuItem>
          <S.MenuTitle onClick={() => toggleMenu("occount")}>
            Occount
          </S.MenuTitle>
          {isOpen.occount && (
            <S.SubMenu>
              <S.SubMenuItem>바코드입력</S.SubMenuItem>
              <S.SubMenuItem>일괄충전</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuTitle onClick={() => toggleMenu("inventory")}>
            재고 관리
          </S.MenuTitle>
          {isOpen.inventory && (
            <S.SubMenu>
              <S.SubMenuItem>재고 내역</S.SubMenuItem>
              <S.SubMenuItem>상품 내역</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuTitle onClick={() => toggleMenu("finance")}>
            재정 관리
          </S.MenuTitle>
          {isOpen.finance && (
            <S.SubMenu>
              <S.SubMenuItem>매입매출</S.SubMenuItem>
              <S.SubMenuItem>금전출납부</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuTitle onClick={() => toggleMenu("members")}>
            조합원 관리
          </S.MenuTitle>
          {isOpen.members && (
            <S.SubMenu>
              <S.SubMenuItem>조합원목록</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuTitle onClick={() => toggleMenu("settings")}>설정</S.MenuTitle>
          {isOpen.settings && (
            <S.SubMenu>
              <S.SubMenuItem>기본 정보</S.SubMenuItem>
              <S.SubMenuItem>계좌 정보</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.MenuItem>
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
