import styled from "styled-components";
import { Col, Row } from "antd";
export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroContainer = styled(Row)`
  width: 80%;
  .hero__content {
    padding-top: 80px;
    h5 {
      margin-bottom: 16px;
      font-size: 20px;
    }
    h1 {
      margin-bottom: 18px;
      font-size: 2.5rem;
      line-height: 1.2;
      span {
        color: ${(props) => props.theme.color.red};
        &:nth-of-type(2) {
          font-size: 3.2rem;
        }
      }
    }
    p {
      width: 80%;
      font-size: 1rem;
      line-height: 30px;
    }
    .btn__order {
      font-weight: bold;
      color: #fff;
      background-color: ${(props) => props.theme.color.red};
      transition: 0.3 all;
      box-shadow: 0px 0px 2px 0px;
    }
    .btn__order:hover {
      box-shadow: 5px 5px 10px 0px;
      transform: scale(1.1);
    }
    .btn__seefood:hover {
      color: ${(props) => props.theme.color.red};
      border: 1px solid ${(props) => props.theme.color.red};
      transform: scale(1.1);
    }
  }
  .hero__image {
    img {
      width: 100%;
    }
  }
`;
export const FoodCategoryContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  .food__category {
    width: 80%;
    background-color: ${(props) => props.theme.color.red};
    text-align: center;
    margin-top: 30px;
    padding: 20px 0;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 7px 20px;
      outline: none;
      border: none;
      background-color: transparent;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background-color: ${(props) => props.theme.color.pink};
        color: ${(props) => props.theme.color.black};
      }
      &.actived-button {
        background-color: ${(props) => props.theme.color.pink};
        color: ${(props) => props.theme.color.black};
      }
    }
    .btn__img {
      display: flex;
      align-items: center;
      gap: 5px;
      & p {
        margin-bottom: 0;
      }
      & img {
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
  }
`;
export const FoodShowCard = styled(Row)`
  width: 80%;
  padding-top: 40px;
`;

export const WhyChooseUsContainer = styled(Row)`
  width: 80%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
  .why__title {
    span {
      font-size: 1.3em;
      color: ${(props) => props.theme.color.red};
    }
  }
`;

export const BestPizzaContainer = styled(Row)`
  width: 80%;
`;
export const Testimonial = styled(Row)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  .testimonial {
    &__img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
    }

    &__subtitle {
      color: ${(props) => props.theme.color.red};
      font-size: 1.2rem;
    }
    &__title span {
      color: ${(props) => props.theme.color.red};
    }
  }
`;
