import React from "react";
import * as S from "./style";
import imageBaner from "../../assets/images//1200-1200x676-87.jpeg";
const CommonFood = (props) => {
  return (
    <S.CommonFoodContainer>
      <div className="commonfood__banner">
        <h2>{props.title}</h2>
      </div>
    </S.CommonFoodContainer>
  );
};

export default CommonFood;
