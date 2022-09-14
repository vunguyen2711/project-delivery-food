import styled from "styled-components";
import { Col } from "antd";
export const AllFoodContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 0;
  .search__widget {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .filter__widget {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
export const PaginationContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  .products__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 20px;
    a {
      padding: 5px 10px;

      cursor: pointer;

      font-size: 1.1rem;
      color: ${(props) => props.theme.color.black};
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.color.red};
      &:hover {
        background-color: ${(props) => props.theme.color.red};
        color: #fff;
      }
    }
  }
`;
