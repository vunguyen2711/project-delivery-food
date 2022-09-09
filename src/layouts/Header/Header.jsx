import React from "react";
import * as S from "./style";
import logo from "../../assets/images/res-logo.png";
import { ShopOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const menuLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All-Food",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  console.log(isShowMenu);
  return (
    <S.HeaderContainer>
      <S.OverLay
        onClick={() => handleShowMenu()}
        isShowMenu={isShowMenu}
      ></S.OverLay>
      <S.NavBarWrapper>
        <Link to="/">
          <S.Logo>
            <img src={logo} alt="logo" />
            <h5>Tasty Pizza</h5>
          </S.Logo>
        </Link>

        <S.Menu isShowMenu={isShowMenu}>
          {menuLinks.map((menuLink) => (
            <NavLink
              onClick={() => handleShowMenu()}
              className="nav__link"
              to={menuLink.path}
            >
              {menuLink.display}
            </NavLink>
          ))}
        </S.Menu>

        <S.NavIconDesktop>
          <S.CartFunction>
            <ShopOutlined />
            <span className="cart__amount">2</span>
          </S.CartFunction>
          <S.LoginFunction>
            <Link to="/login">
              <UserOutlined />
            </Link>
          </S.LoginFunction>
          <S.NavIconMobile onClick={() => handleShowMenu()}>
            <MenuOutlined />
          </S.NavIconMobile>
        </S.NavIconDesktop>
      </S.NavBarWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
