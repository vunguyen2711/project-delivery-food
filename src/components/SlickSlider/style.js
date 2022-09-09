import Slider from "react-slick";
import styled from "styled-components";

export const SliderContainer = styled(Slider)`
  text-align: center;
  .feedback {
    &__content {
      color: #777;
    }
    &__img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      margin-bottom: 10px;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      border: 5px solid ${(props) => props.theme.color.red};
    }
    &__name {
      font-size: 1.2rem;
    }
  }
`;
