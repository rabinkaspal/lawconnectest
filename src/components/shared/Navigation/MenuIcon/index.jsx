import React from "react";
import { Hamburger } from "./Styles";

const MenuIcon = ({ active, setNavActive }) => {
  return (
    <Hamburger className={active ? "active" : ""} onClick={() => setNavActive(t => !t)}>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

export default MenuIcon;
