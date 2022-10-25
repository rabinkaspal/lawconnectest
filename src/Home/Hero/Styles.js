import styled from "styled-components";
import { color, font, mixin } from "shared/utils/styles";

export const PageContent = styled.div`
  display: flex;
  color: ${color.textWhite};
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #eee; */
  padding-left: 32px;
  padding-top: 134px;
  padding-bottom: 44px;
  position: relative;
  transform: all 0.3s ease-in-out;

  ${mixin.safariGapTop(40)}

  @media (max-width: 768px) {
    padding: 32px;
    flex-direction: column-reverse;
    gap: 32px;
  }

  @media (max-width: 480px) {
    padding: 32px 20px;
    gap: 20px;
  }

  :before {
    content: " ";
    position: absolute;
    right: 60px;
    bottom: 10px;
    width: 474px;
    height: 550px;
    border-radius: 50%;
    box-shadow: 0 0 0 120px #0e5fe3;
    opacity: 40%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ContentLeft = styled.div`
  text-align: left;
  max-width: 445px;
  z-index: 9;

  @media (max-width: 768px) {
    text-align: center;
  }

  h1 {
    ${font.bolder}
    ${font.size(48)}
    line-height: 56px;
    margin-bottom: 20px;
    letter-spacing: -0.72px;

    @media (min-width: 768px) and (max-width: 1100px) {
      ${font.bolder}
      ${font.size(44)}
    line-height: 50px;
      letter-spacing: -0.62px;
    }

    @media (max-width: 480px) {
      ${font.size(36)}
      line-height: 38px;
      margin-bottom: 12px;
      letter-spacing: -0.48px;
    }
  }

  p {
    ${font.regular}
    ${font.size(16)}
    line-height: 24px;
    margin-bottom: 40px;
    letter-spacing: 0.08px;

    @media (min-width: 768px) and (max-width: 1100px) {
      ${font.size(14)}
      line-height: 22px;
      margin-bottom: 32px;
      letter-spacing: 0.08px;
    }

    @media (max-width: 480px) {
      ${font.size(14)}
      line-height: 22px;
      margin-bottom: 24px;
      letter-spacing: 0.07px;
    }
  }
`;

export const ContentRight = styled.div`
  justify-content: end;
  z-index: 5;

  img {
    width: 100%;
    max-width: 611px;

    @media (max-width: 768px) {
      width: 100%;
      width: 60vw;
      height: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
