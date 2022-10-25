import styled from "styled-components";
import { color, sizes } from "shared/utils/styles";

export const HomePage = styled.div`
  background-color: ${color.backgroundWhite};
`;
export const SectionHero = styled.section`
  background: linear-gradient(${color.primaryLight}, ${color.primary});
  padding-bottom: 72px;
  padding-top: 32px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 62px;
  }
  @media (max-width: 480px) {
    padding-bottom: 28px;
  }
`;
export const SectionLight = styled.section`
  background-color: ${color.backgroundWhite};
  min-height: ${sizes.minContentHeight}px;
`;
export const SectionDark = styled.section`
  background-color: ${color.backgroundLight};
  min-height: ${sizes.minContentHeight}px;
`;

export const ContentWrapper = styled.div`
  max-width: ${sizes.maxViewportWidth}px;
  margin: 0 auto;
`;

export const Footer = styled.div`
  background-color: ${color.backgroundDark};
  height: 142px;

  @media (max-width: 768px) {
    height: 94px;
  }

  @media (max-width: 480px) {
    height: 47px;
  }
`;
