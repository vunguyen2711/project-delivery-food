import styled from "styled-components";

export const CommonFoodContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  .commonfood__banner {
    width: 100%;
    height: 150px;
    background-color: ${(props) => props.theme.color.red};
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: #fff;
    }
  }
`;
