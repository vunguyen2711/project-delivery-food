import styled from "styled-components";

export const ProductItem = styled.div`
  text-align: center;
  margin: 20px 0;

  .product__img img {
    width: 80%;
    object-fit: contain;
    transition: all 0.5;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  .product__content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    & .product__name {
      color: ${(props) => props.theme.color.black};
      font-size: 20px;
      &:hover {
        color: ${(props) => props.theme.color.red};
      }
    }
    & .product__price {
      font-size: 1.2rem;
      font-weight: bold;
    }
    & .btn__addtocart {
      margin-top: 10px;
      border-radius: 5px;
      font-size: 0.9rem;
      &:hover {
        background-color: ${(props) => props.theme.color.red};
        color: #fff;
        border: none;
      }
    }
  }
`;
