import styled from "styled-components";
import { font, color, sizes } from "shared/utils/styles";

export const Card = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background-color: ${color.backgroundWhite};
  max-width: 330px;
  box-shadow: 0px 5px 15px ${color.shadowLight};
  @media (max-width: 768px) {
    max-width: 420px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: ${sizes.appCardImageHeight}px;
  }
`;

export const CardInfo = styled.div`
  padding: 24px;

  h3 {
    color: ${color.primaryLight};
    ${font.bold}
    ${font.size(18)};
    margin-bottom: 10px;
    line-height: 24px;
    text-align: left;
  }

  p {
    ${font.regular}
    ${font.size(16)};
    letter-spacing: 0.08px;
    line-height: 24px;
    text-align: left;
    opacity: 80%;

    @media (max-width: 480px) {
      ${font.bold}
      ${font.size(14)};
      letter-spacing: 0px;
      line-height: 20px;
    }
  }
`;
