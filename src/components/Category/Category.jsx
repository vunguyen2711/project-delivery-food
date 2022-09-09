import React from "react";
import category__image01 from "../../assets/images/category-01.png";
import category__image02 from "../../assets/images/category-02.png";
import category__image03 from "../../assets/images/category-03.png";
import category__image04 from "../../assets/images/category-04.png";
import { Row, Col } from "antd";
import * as S from "./style";
const categoryData = [
  { display: "FastFood", imgUrl: category__image01 },
  { display: "Pizza", imgUrl: category__image02 },
  { display: "AsianFood", imgUrl: category__image03 },
  { display: "Row Meat", imgUrl: category__image04 },
];

const Category = () => {
  return (
    <S.CategoryContainer>
      <S.CategoryMainContent gutter={10}>
        {categoryData.map((item, index) => (
          <Col lg={6} md={8}>
            <div className="category__item">
              <div className="category__image">
                <img src={item.imgUrl} alt="" />
              </div>
              <h5>{item.display}</h5>
            </div>
          </Col>
        ))}
      </S.CategoryMainContent>
    </S.CategoryContainer>
  );
};

export default Category;
