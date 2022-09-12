import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.color.pink};
  &.header__fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 2px 2px 10px -5px;
  }
`;
export const NavBarWrapper = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  text-align: center;
  padding-top: 10px;
  img {
    width: 50px;
    object-fit: cover;
  }
  h5 {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.color.black};
  }
  @media screen and (max-width: 992px) {
    img {
      width: calc(100% - 70%);
    }
    h5 {
      font-size: 0.8rem;
      margin-top: -3px;
    }
  }
`;
export const OverLay = styled.div`
  @media screen and (max-width: 992px) {
    display: ${(props) => (props.isShowMenu ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  .nav__link {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.color.black};
    transition: 0.3s all;
    &:hover {
      color: ${(props) => props.theme.color.red};
    }
    &:focus,
    :active {
      color: ${(props) => props.theme.color.red};
    }
  }
  @media screen and (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    gap: 20px;
    background-color: #fff;
    padding: 30px 50px;
    transform: translateX(250px);

    .nav__link {
      font-size: 1rem;
    }
    .nav__link:hover {
      transform: translateX(10px);
    }
    ${(props) =>
      props.isShowMenu &&
      css`
        transform: translateX(0);
        transition: all 0.3s;
      `}
  }
`;
export const NavIconDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CartFunction = styled.div`
  position: relative;

  cursor: pointer;
  #cart__icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cart__amount {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color.red};
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    font-size: 0.8rem;
    color: #fff;
  }
  @media screen and (max-width: 992px) {
    #cart__icon,
    .cart__amount {
      font-size: 1rem;
    }
  }
`;
export const LoginFunction = styled.div`
  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 992px) {
    svg {
      font-size: 1rem;
    }
  }
`;
export const NavIconMobile = styled.div`
  svg {
    font-size: 1rem;
    cursor: pointer;
  }
  display: none;

  ${LoginFunction} {
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
