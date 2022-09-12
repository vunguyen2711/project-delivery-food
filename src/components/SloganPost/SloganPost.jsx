import React from "react";
import { Row, Col } from "antd";
import * as S from "./style";
import feature__imag01 from "../../assets/images/service-01.png";
import feature__imag02 from "../../assets/images/service-02.png";
import feature__imag03 from "../../assets/images/service-03.png";
const sloganData = [
  {
    title: "Quick Delivery",
    imgUrl: feature__imag01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam!",
  },
  {
    title: "Super Dive In",
    imgUrl: feature__imag02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam!",
  },
  {
    title: "Easy Pick Up",
    imgUrl: feature__imag03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam!",
  },
];
const SloganPost = () => {
  return (
    <div>
      <Row>
        <S.SloganTxtContainer style={{ textAlign: "center" }} lg={24}>
          <h5>What we serve</h5>
          <h2>Just Sit back at Home</h2>
          <h2>
            We will <span>take care</span>{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perspiciatis ut explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perspiciatis ut explicabo!
          </p>
        </S.SloganTxtContainer>
      </Row>
      <S.SloganServiceContainer style={{ marginTop: "10px" }}>
        {sloganData.map((item, index) => (
          <Col lg={8} md={8}>
            <div className="slogan__item">
              <img
                className="slogan__item-img"
                src={item.imgUrl}
                alt="image__slogan"
              />
              <h5 className="slogan__item-title">{item.title}</h5>
              <p className="slogan__item-desc">{item.desc}</p>
            </div>
          </Col>
        ))}
      </S.SloganServiceContainer>
    </div>
  );
};

export default SloganPost;
