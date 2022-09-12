import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cartSlice";
import * as S from "./style";
import { Link } from "react-router-dom";
import { Button } from "antd";
const ProductCard = ({ item }) => {
  const { id, title, price, category, desc, image01 } = item;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: id,
        title: title,
        price: price,
        image01: image01,
        totalPrice: price,
        totalAmount: 1,
      })
    );
  };
  return (
    <S.ProductItem>
      <Link to={`/foods/${id}`}>
        <div className="product__img">
          <img src={image01} alt="product__img" />
        </div>
      </Link>

      <div className="product__content">
        <Link to={`/foods/${id}`}>
          <h4 className="product__name">{title}</h4>
        </Link>
        <span className="product__price">${price}</span>
        <Button onClick={handleAddToCart} className="btn__addtocart">
          Add to cart
        </Button>
      </div>
    </S.ProductItem>
  );
};

export default ProductCard;
