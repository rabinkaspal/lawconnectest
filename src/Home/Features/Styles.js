import styled from "styled-components";
import { color, font, mixin } from "shared/utils/styles";

export const PageContent = styled.div`
  color: ${color.textDark};
  padding: 80px 0;
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 50px 32px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }

  h2 {
    color: ${color.primary};
    ${font.bold}
    ${font.size(36)};
    margin-bottom: 64px;
    text-align: center;
    letter-spacing: -0.54px;
    line-height: 42px;

    @media (max-width: 980px) {
      padding: 0 32px;
    }
    @media (max-width: 480px) {
      padding: 0;
      ${font.regular}
      ${font.size(24)};
      line-height: 32px;
      letter-spacing: -0.24px;
      margin-bottom: 30px;
    }
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 32px;
  gap: 20px;
  ${mixin.safariGapTop(32)}

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 48px;
  }

  @media (max-width: 480px) {
    padding: 0px;
    gap: 24px;
  }
`;
