import styled, { css } from "styled-components";
import { color, font } from "shared/utils/styles";

export const StyledButton = styled.button`
  ${font.bolder}
  ${font.size(16)}
  color: ${color.textWhite};
  padding: 9px 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  ${props =>
    props.primary &&
    css`
      background-color: ${color.accent};
      :hover {
        background-color: ${color.primary};
      }
    `}

  @media (max-width: 480px) {
    width: 100%;
    padding-inline: 0;
    height: 48px;
  }

  ${props =>
    !props.primary &&
    css`
        position: relative;

    :after {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      bottom: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
      background-color: white;
    }

    :hover {
      :after {
        left: 25%;
        width: 50%;
      }
    }
  }
`}
`;

export const StyledMenuButton = styled.button`
  ${font.bolder}
  ${font.size(16)}
  color: ${color.textWhite};
  padding: 9px 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;

  :after {
    content: "";
    position: absolute;
    left: 50%;
    width: 0;
    bottom: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  :hover {
    :after {
      left: 25%;
      width: 50%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-inline: 0;
    height: 48px;
  }
`;
