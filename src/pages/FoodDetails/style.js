import styled from "styled-components";
import { Row, Col } from "antd";
export const FoodDetailContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FoodDetailsLayout = styled(Row)`
  width: 80%;
  display: flex;
  align-items: flex-start;
  .product__small-image {
    gap: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    cursor: pointer;
    .image__small-item {
      img {
        width: 50%;
      }
    }
  }
  .product__main-image {
    .image__main-item {
      img {
        width: 100%;
      }
    }
  }
  .product__content {
    padding-left: 50px;
    .product__title {
    }
    .product__price {
      font-size: 2rem;
      color: ${(props) => props.theme.color.red};
    }
    .product__category {
      font-weight: bold;
      color: ${(props) => props.theme.color.black};
      span {
        font-size: 1.2rem;
        padding: 7px;
      }
    }
    .product__btn {
      margin-top: 10px;
      border-radius: 5px;
      font-size: 0.9rem;
      border: 1px solid ${(props) => props.theme.color.red};
      &:hover {
        background-color: ${(props) => props.theme.color.red};
        color: #fff;
        border: ${(props) => props.theme.color.red};
      }
    }
  }
`;

export const TabsContainer = styled(Col)`
  .tabs {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 0.5rem 0;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    border-bottom: 1px solid #333;
    margin-bottom: 5px;
    h6.tab__active {
      color: ${(props) => props.theme.color.red};
    }
  }
  .tabs__content {
    font-size: 18px;
    padding: 10px;
    color: ${(props) => props.theme.color.black};
    line-height: 30px;
  }
`;
