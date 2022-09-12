import React, { useState, useEffect } from "react";

import Helmet from "../../layouts/Helmet/Helmet";
import Category from "../../components/Category/Category";
import SloganPost from "../../components/SloganPost/SloganPost";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Row, Col, Space, Button, Typography, List, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  CarOutlined,
  MoneyCollectFilled,
  CheckCircleOutlined,
} from "@ant-design/icons";
import products from "../../assets/fake-data/products";
import whyimg from "../../assets/images/location.png";
import foodCategory01 from "../../assets/images/hamburger.png";
import foodCategory02 from "../../assets/images/pizza.png";
import foodCategory03 from "../../assets/images/bread.png";
import heroImage from "../../assets/images/hero.png";
import networkImg from "../../assets/images/network.png";
import * as S from "./style";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
const feedbackData = [
  {
    title:
      "You're really good at following up with the client so as to ensure that they are never left in the dark. Keep it up",
  },
  {
    title: "You excel at serving your customers. Great job!",
  },
  {
    title:
      "I loved listening back on your recent discovery call. Your authenticity puts people at ease right away, your personality shines through and you show such a great understanding of our offer.",
  },
  {
    title:
      "It’s fantastic to see how committed you are to learning and I wanted to recognise your commitment",
  },
  {
    title:
      "You’ve done an incredible job taking on new responsibilities and stepping up to your new role. ",
  },
];
const whyData = [
  {
    title: "The Best Service In VietNam",
  },
  {
    title: "100% Guarentee",
  },
  {
    title: "Fast Transportation",
  },
  {
    title: "Freeshipping Cost",
  },
];

const Home = () => {
  //*useState Section
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  //* UseEffect Section
  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }
    if (category === "Burger") {
      const filterBurger = products.filter(
        (item, index) => item.category === "Burger"
      );
      setAllProducts(filterBurger);
    }
    if (category === "Pizza") {
      const filterPizza = products.filter(
        (item, index) => item.category === "Pizza"
      );
      setAllProducts(filterPizza);
    }
    if (category === "Bread") {
      const filterBread = products.filter(
        (item, index) => item.category === "Bread"
      );
      setAllProducts(filterBread);
    }
  }, [category]);

  useEffect(() => {
    const filterJustPizza = products.filter(
      (product, item) => product.category === "Pizza"
    );
    const slice04Pizza = filterJustPizza.slice(0, 4);
    setHotPizza(slice04Pizza);
  }, [products]);

  return (
    <Helmet title="Home">
      <S.HomeContainer>
        <S.HeroContainer gutter={20}>
          <Col lg={12} sm={24}>
            <div className="hero__content">
              <h5>Easyway to take an order</h5>
              <h1>
                <span>HUNGRY ?</span> Just wait <br />
                food at
                <span> YOUR DOOR </span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dolore est quas ducimus dolor necessitatibus rem earum a optio
                explicabo!
              </p>
              <Space size="middle">
                <Button
                  size="large"
                  className="btn__order"
                  icon={<ArrowRightOutlined />}
                >
                  Order Now
                </Button>
                <Link to="/foods">
                  <Button size="large" className="btn__seefood">
                    See all food
                  </Button>
                </Link>
              </Space>
              <br />
              <br />

              <Space
                size="middle"
                style={{ color: "#212425", fontWeight: "bold" }}
              >
                <Typography.Paragraph>
                  <CarOutlined /> No Shiping Money
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <MoneyCollectFilled /> 100% money back
                </Typography.Paragraph>
              </Space>
            </div>
          </Col>
          <Col lg={12} sm={24}>
            <div className="hero__image">
              <img src={heroImage} alt="" />
            </div>
          </Col>
        </S.HeroContainer>
      </S.HomeContainer>

      <section>
        <Category />
      </section>

      <section>
        <SloganPost />
      </section>

      <section>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col style={{ textAlign: "center" }} lg={24} md={24}>
            <h2>Popular Food</h2>
          </Col>
          <S.FoodCategoryContainer lg={24} md={24}>
            <div className="food__category">
              <button
                onClick={() => setCategory("All")}
                className={`btn__allfood ${
                  category === "All" ? `actived-button` : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => setCategory("Burger")}
                className={`btn__img ${
                  category === "Burger" ? `actived-button` : ""
                }`}
              >
                <img src={foodCategory01} alt="" /> <p>Burger</p>
              </button>
              <button
                onClick={() => setCategory("Pizza")}
                className={`btn__img ${
                  category === "Pizza" ? `actived-button` : ""
                }`}
              >
                <img src={foodCategory02} alt="" /> <p>Pizza</p>
              </button>
              <button
                onClick={() => setCategory("Bread")}
                className={`btn__img ${
                  category === "Bread" ? `actived-button` : ""
                }`}
              >
                <img src={foodCategory03} alt="" /> <p>Bread</p>
              </button>
            </div>
          </S.FoodCategoryContainer>
          <S.FoodShowCard>
            {allProducts.map((item, index) => (
              <Col key={item.id} lg={6} md={8}>
                <ProductCard item={item} />
              </Col>
            ))}
          </S.FoodShowCard>
        </Row>
      </section>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <S.WhyChooseUsContainer gutter={32}>
          <Col lg={12} md={12}>
            <div className="why__img">
              <img src={whyimg} alt="" />
            </div>
          </Col>

          <Col
            lg={12}
            md={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="why__title">
              <span>Why</span> People choose us ???
            </h2>
            <List
              itemLayout="horizontal"
              dataSource={whyData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Col>
        </S.WhyChooseUsContainer>
      </section>
      <section
        style={{ display: "flex", justifyContent: "center", paddingTop: "0" }}
      >
        <S.BestPizzaContainer>
          <Col className=" " lg={24} style={{ textAlign: "center" }}>
            <h2>Hot Pizza</h2>
          </Col>
          {hotPizza.map((item, idex) => (
            <Col key={item.id} lg={6} md={8}>
              <ProductCard item={item} />
            </Col>
          ))}
        </S.BestPizzaContainer>
      </section>

      <section
        style={{ display: "flex", justifyContent: "center", paddingTop: "0" }}
      >
        <S.Testimonial gutter={20}>
          <Col lg={12} md={12}>
            <div className="testimonial" style={{ textAlign: "center" }}>
              <h5 className="testimonial__subtitle">Testimonial</h5>
              <h2 className="testimonial__title">
                What are <span>our customer</span> are saying ?
              </h2>
              <SlickSlider />
            </div>
          </Col>
          <Col lg={12} md={12}>
            <img
              className="testimonial__img"
              src={networkImg}
              alt="network-img"
            />
          </Col>
        </S.Testimonial>
      </section>
    </Helmet>
  );
};

export default Home;
