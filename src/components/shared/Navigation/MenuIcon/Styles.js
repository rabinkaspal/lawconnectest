import styled from "styled-components";
import { color } from "shared/utils/styles";

export const Hamburger = styled.div`
  display: none;
  width: 20px;
  height: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  transition-delay: 0.2s;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    border-radius: 100vw;
    background-color: ${color.backgroundWhite};
    transition: all 0.3s ease-in;
  }

  &.active {
    transform: rotate(45deg);
    span {
      :nth-child(2) {
        transition-duration: 0.1s;
        width: 0;
      }

      :first-child {
        transition-delay: 0.1ms;
        transition-duration: 0.2s;
        transform: translateY(7px);
      }

      :last-child {
        transition-delay: 0.3ms;
        transition-duration: 0.2s;
        transform: translateY(-7px) rotate(90deg);
      }
    }
  }

  @media (max-width: 990px) {
    display: flex;
  }
`;
