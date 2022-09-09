import React from "react";
import * as S from "./style";
import {
  Col,
  Row,
  List,
  Typography,
  Card,
  Input,
  Form,
  Button,
  Space,
} from "antd";
import {
  SendOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/res-logo.png";
const Footer = () => {
  return (
    <S.FooterContainer>
      <Row gutter={20} style={{ width: "80%" }}>
        <Col xs={24} md={12} lg={6}>
          <List>
            <List.Item>
              <S.Logo>
                <img src={logo} alt="logo" />
                <h5>Tasty Pizza</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, necessitatibus!
                </p>
              </S.Logo>
            </List.Item>
          </List>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <List>
            <List.Item>
              <Card
                size="small"
                className="footer__card"
                bordered={false}
                style={{ width: "100%", background: "transparent" }}
                title={
                  <Typography.Title level={3}>DeliveryTime</Typography.Title>
                }
              >
                <Typography.Title level={5}>Sunday-Thursday</Typography.Title>

                <span>9h30-19h30</span>
                <br />
                <br />
                <Typography.Title level={5} className="footer__card-Title">
                  Friday-Saturday
                </Typography.Title>

                <span>Off</span>
              </Card>
            </List.Item>
          </List>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <List>
            <List.Item>
              <Card
                size="small"
                className="footer__card"
                bordered={false}
                style={{ width: "100%", background: "transparent" }}
                title={<Typography.Title level={3}>Contact</Typography.Title>}
              >
                <Typography.Title level={5} className="footer__card-Title">
                  Location:
                </Typography.Title>
                <span>123 st, Loadroad village</span>
                <br />
                <br />
                <Typography.Title level={5}>
                  Phone: +84 905816128
                </Typography.Title>
                <Typography.Title level={5} className="footer__card-Title">
                  Email: pizzatasty@gmail.com
                </Typography.Title>
              </Card>
            </List.Item>
          </List>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <List>
            <List.Item>
              <Card
                size="small"
                className="footer__card"
                bordered={false}
                style={{ width: "100%", background: "transparent" }}
                title={
                  <Typography.Title level={3}>News Letter</Typography.Title>
                }
              >
                <Form style={{ display: "flex", width: "100%" }}>
                  <Form.Item
                    name="new"
                    style={{ width: "60%", marginRight: "10px" }}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="button">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<SendOutlined />}
                    />
                  </Form.Item>
                </Form>
                <Typography.Title level={5}>Social NetWorld:</Typography.Title>
                <Space>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<FacebookOutlined />}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<InstagramOutlined />}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<GithubOutlined />}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<TwitterOutlined />}
                  />
                </Space>
              </Card>
            </List.Item>
          </List>
        </Col>
      </Row>
    </S.FooterContainer>
  );
};

export default Footer;
