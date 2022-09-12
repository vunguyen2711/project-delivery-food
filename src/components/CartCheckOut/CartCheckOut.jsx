import { Avatar, Card, Divider, Button, InputNumber, Space } from "antd";
import React from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import * as S from "./style";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  deleteItem,
} from "../../redux/features/cartSlice";
const { Meta } = Card;

const CartCheckOut = ({ cartItem }) => {
  const { image01, title, totalAmount, id, totalPrice } = cartItem;
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "100%" }}>
      <Meta
        avatar={<Avatar size="large" src={image01} />}
        title={title}
        description={`Price: $${totalPrice}`}
      />

      <Divider></Divider>
      <S.CardAction>
        <Space className="cart__amount-item">
          <PlusCircleOutlined onClick={() => dispatch(addItem(cartItem))} />
          <InputNumber
            value={totalAmount}
            readOnly
            size="small"
            className="cart__amount-input"
          />
          <MinusCircleOutlined onClick={() => dispatch(decreaseItem(id))} />
        </Space>

        <Button onClick={() => dispatch(deleteItem(id))} type="primary" danger>
          Delete
        </Button>
      </S.CardAction>
    </Card>
  );
};

export default CartCheckOut;
