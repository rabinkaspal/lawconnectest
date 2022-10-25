import styled from "styled-components";
import { color, font, mixin } from "shared/utils/styles";

export const PageContent = styled.div`
  color: ${color.textDark};
  padding: 64px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${mixin.safariGapBottom(32)}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 480px) {
    padding: 32px 20px;
    gap: 47px;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;

  img {
    width: 100%;
    max-width: 370px;
    height: 100%;
  }
`;

export const ContentRight = styled.div`
  max-width: 445px;
  h2 {
    color: ${color.primary};
    ${font.bold}
    ${font.size(36)};
    margin-bottom: 16px;
    letter-spacing: -0.54px;
    line-height: 42px;

    @media (max-width: 480px) {
      ${font.bolder}
      ${font.size(24)};
      margin-bottom: 12px;
      letter-spacing: -0.24px;
      line-height: 32px;
    }
  }

  p {
    color: ${color.textDark};
    ${font.regular}
    ${font.size(16)};
    letter-spacing: 0.08px;
    line-height: 24px;

    @media (max-width: 480px) {
      ${font.size(14)};
      letter-spacing: -0.07px;
      line-height: 22px;
    }
  }
`;
