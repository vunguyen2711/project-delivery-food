import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 50px 0;
  background-color: #fde4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.div`
  padding-top: 20px;
  img {
    width: 100px;
    object-fit: cover;
    margin-bottom: 5px;
  }
  h5 {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.color.black};
  }
  p {
    width: 80%;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 28px;
    color: #333;
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
