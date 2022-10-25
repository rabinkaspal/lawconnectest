import React from "react";
import { StyledButton } from "./Styles";

const Button = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export const MenuButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
