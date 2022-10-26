import styled from "styled-components";
import { color, sizes, mixin } from "shared/utils/styles";

export const NavBar = styled.div`
  z-index: 20;
  max-width: ${sizes.maxViewportWidth}px;
  position: fixed;
  margin-top: 16px;
  width: 100%;
  background-color: transparent;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1196px) {
    padding-inline: 32px;
  }

  @media (max-width: 991px) {
    padding-inline: 24px;
    height: 60px;
    margin-top: 0;
    background-color: ${color.primaryLight};

    @media (max-width: 768px) {
      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
`;

export const BrandLogo = styled.img`
  cursor: pointer;
  width: 220px;
  height: 50px;
  flex: 0;
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 145px;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${(props) => (props.active ? "0px" : "-700px")};
  left: 10%;
  width: 80%;
  z-index: 10;
  padding: 80px 20px 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  ${mixin.boxShadowDropdown}
  background-color: #013280;
  display: flex;
  transition: all 0.4s ease-out;
  gap: 6px;
  max-height: 400px;
  overflow: scroll;
  ${mixin.safariGapBottom(6)}
  align-items: center;
  justify-content: space-around;

  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    ${mixin.safariGapBottom(5)}

    @media (max-width: 480px) {
      width: 100%;
      align-items: center;
    }
  }

  @media (min-width: 991px) {
    top: -700px;
  }
`;

export const NavMenu = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;
