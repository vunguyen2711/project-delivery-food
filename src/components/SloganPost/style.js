import styled from "styled-components";
import { Row, Col } from "antd";
export const SloganTxtContainer = styled(Col)`
  text-align: center;
  h5 {
    color: ${(props) => props.theme.color.red};
    font-size: 24px;
    margin-bottom: 24px;
  }
  h2 {
    margin-bottom: 0;
  }
  span {
    color: ${(props) => props.theme.color.red};
  }
  p {
    margin-bottom: 8px;
    margin-top: 16px;
  }
`;
export const SloganServiceContainer = styled(Row)`
  width: 80%;
  margin: 0 auto;
  .slogan__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    &-img {
      width: 25%;
      margin-bottom: 10px;
    }
    &-title {
      font-weight: bold;
      font-size: 25px;
    }
    &-desc {
      text-align: center;
      font-size: 1.2rem;
      padding: 0 16px;
    }
  }
`;
