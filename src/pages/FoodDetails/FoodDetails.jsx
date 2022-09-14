import React, { useState } from "react";
import products from "../../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../../layouts/Helmet/Helmet";
import CommonFood from "../../components/Common-Food/CommonFood";
import { Row, Col, Button, Tabs, Divider } from "antd";

import * as S from "./style";
const FoodDetails = () => {
  const { id } = useParams();
  const [tabPosition, setTabPosition] = useState("Description");
  const product = products.find((item, index) => item.id === id);
  const { title, price, category, desc, image01, image02, image03 } = product;
  const [previewImage, setPreviewImage] = useState(image01);
  return (
    <Helmet title="Food-Details">
      <CommonFood title={title} />
      <S.FoodDetailContainer>
        <S.FoodDetailsLayout gutter={10}>
          <Col lg={4} md={4} sm={4}>
            <div className="product__small-image">
              <div
                onMouseOver={() => setPreviewImage(image01)}
                className="image__small-item"
              >
                <img src={image01} alt="" />
              </div>
              <div
                onMouseOver={() => setPreviewImage(image02)}
                className="image__small-item"
              >
                <img src={image02} alt="" />
              </div>
              <div
                onMouseOver={() => setPreviewImage(image03)}
                className="image__small-item"
              >
                <img src={image03} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <div className="product__main-image">
              <div className="image__main-item">
                <img src={previewImage} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="product__content">
              <h2 className="product__title">{title}</h2>
              <span className="product__price">Price: ${price}</span>
              <p className="product__category">
                Category: <span>{category}</span>
              </p>
              <Button className="product__btn">Add To Cart</Button>
            </div>
          </Col>
          <S.TabsContainer lg={24} md={24}>
            <div className="tabs">
              <h6
                className={`${tabPosition === "Description" && "tab__active"}`}
                onClick={() => setTabPosition("Description")}
              >
                Description
              </h6>
              <Divider type="vertical" />
              <h6
                className={`${tabPosition === "Review" && "tab__active"}`}
                onClick={() => setTabPosition("Review")}
              >
                Review
              </h6>
            </div>
            {tabPosition === "Description" && (
              <div className="tabs__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                totam debitis nulla quibusdam exercitationem autem error, non ut
                numquam temporibus id excepturi aliquam quia ipsum modi quaerat,
                fugiat veniam illo! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Optio esse, hic ut culpa, temporibus soluta
                dolores veniam non quasi itaque voluptatum praesentium
                laudantium doloribus quae dolore quo iusto architecto!
                Repudiandae et illo nostrum debitis consequuntur rem voluptatum
                quo eligendi pariatur doloremque sequi quaerat quos, error neque
                libero adipisci corrupti! Culpa temporibus natus, architecto
                rerum suscipit molestiae dolore necessitatibus placeat facere
                ducimus quia ad consectetur? Doloremque voluptatibus autem
                tempora corrupti quod quam voluptate dolores. Obcaecati
                distinctio incidunt nesciunt nostrum beatae ab laudantium
                repudiandae magni architecto, culpa deleniti vero unde hic
                cupiditate totam optio numquam vel error in omnis quaerat fuga
                assumenda!
              </div>
            )}
            {tabPosition === "Review" && (
              <div className="tabs__content">Review</div>
            )}
          </S.TabsContainer>
        </S.FoodDetailsLayout>
      </S.FoodDetailContainer>
    </Helmet>
  );
};

export default FoodDetails;
