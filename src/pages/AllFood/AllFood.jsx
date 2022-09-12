import React, { useEffect, useState } from "react";
import CommonFood from "../../components/Common-Food/CommonFood";
import Helmet from "../../layouts/Helmet/Helmet";
import products from "../../assets/fake-data/products";
import ProductCart from "../../components/ProductCard/ProductCard";
import * as S from "./style";
import { Button, Row, Col, Select } from "antd";
import ReactPaginate from "react-paginate";
const { Option } = Select;

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  const handleChange = (value) => {};

  useEffect(() => {
    const searchFinalProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchProducts(searchFinalProducts);
  }, [searchTerm]);

  return (
    <Helmet title="All-Food">
      <S.AllFoodContainer>
        <CommonFood title="All-Food"></CommonFood>
        <Row style={{ width: "80%" }} gutter={12}>
          <Col lg={12} md={12}>
            <div className="search__widget">
              <input
                style={{
                  padding: "5px",
                  width: "50%",
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="I'm looking for....."
              />
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div className="filter__widget">
              sort by:
              <Select
                defaultValue="ascending"
                style={{ width: 100 }}
                onChange={handleChange}
              >
                <Option value="ascending">a-z</Option>
                <Option value="descending">z-a</Option>
                <Option value="highprice">high price</Option>
                <Option value="lowprice">low price</Option>
              </Select>
            </div>
          </Col>

          {searchProducts.map((item, index) => (
            <Col lg={6} key={item.id} md={8}>
              <ProductCart item={item} />
            </Col>
          ))}
        </Row>
      </S.AllFoodContainer>
    </Helmet>
  );
};

export default AllFood;
