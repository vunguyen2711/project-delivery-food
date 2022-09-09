import styled from "styled-components";
import { Row } from "antd";
export const CategoryContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CategoryMainContent = styled(Row)`
  width: 80%;
  .category__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.color.pink};
    gap: 30px;
    padding: 20px 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s all;
    box-shadow: 0px 0px 0px 0px;
    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 5px 5px 10px 0px;
    }
  }
`;
