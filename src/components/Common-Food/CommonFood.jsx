import React from "react";
import * as S from "./style";

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
