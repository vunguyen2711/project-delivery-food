import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCart } from "../../redux/features/cartSlice";
import * as S from "./style";
import logo from "../../assets/images/res-logo.png";
import { Divider, Drawer, Space, Button } from "antd";
import { ShopOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import CartCheckOut from "../../components/CartCheckOut/CartCheckOut";
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const headerRef = useRef();
  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const shoppingCartData = useSelector(getAllCart);
  const { totalAmountItems, cartItems, totalPriceItems } = shoppingCartData;
  console.log(shoppingCartData);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__fixed");
      } else {
        headerRef.current.classList.remove("header__fixed");
      }

      return () => window.removeEventListener("scroll");
    });
  }, []);
  return (
    <S.HeaderContainer ref={headerRef}>
      <>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={handleToggleDrawer}
          open={openDrawer}
        >
          <Space size="middle" direction="vertical" style={{ width: "100%" }}>
            {cartItems.map((cartItem, index) => (
              <CartCheckOut key={cartItem.id} cartItem={cartItem} />
            ))}
          </Space>
          <Divider />
          <Space
            direction="vertical"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
            className="checkout__section"
          >
            <Space
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
              align="center"
            >
              <h3 style={{ color: "red" }}>Total Orders: </h3>
              <h3>{totalAmountItems}</h3>
            </Space>

            <Space
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
              align="center"
            >
              <h3 style={{ color: "red" }}>Total Amount: </h3>
              <h3>${totalPriceItems}</h3>
            </Space>
            <Space
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
              align="center"
            >
              <Button type="primary">Checkout</Button>
            </Space>
          </Space>
        </Drawer>
      </>

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
          {menuLinks.map((menuLink, index) => (
            <NavLink
              key={index}
              onClick={() => handleShowMenu()}
              className="nav__link"
              to={menuLink.path}
            >
              {menuLink.display}
            </NavLink>
          ))}
        </S.Menu>

        <S.NavIconDesktop>
          <S.CartFunction onClick={handleToggleDrawer}>
            <ShopOutlined />
            <span className="cart__amount">{totalAmountItems}</span>
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
