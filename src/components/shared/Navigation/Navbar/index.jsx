import React, { useEffect, useState } from "react";
import { ContentWrapper } from "pages/Home/Styles";
import { BrandLogo, MobileMenu, NavBar, NavMenu } from "./Styles";
import { AppLogo } from "shared/utils/images";
import data from "data";
import Button from "../../Buttons";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../MenuIcon";

const AppNavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const menu1 = data.nav.main;
  const menu2 = data.nav.secondary;

  const navigate = useNavigate();

  useEffect(() => {
    let navTimer;
    const onScroll = e => {
      navTimer = setTimeout(() => setNavActive(false), 1000);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <ContentWrapper style={{ position: "relative" }}>
      <NavBar>
        <BrandLogo src={AppLogo} alt="svg" onClick={() => navigate("/")} />
        <NavMenu>
          {menu1.map(navmenu => (
            <Button key={navmenu.path} text={navmenu.label} onClick={() => navigate(navmenu.path)} />
          ))}
        </NavMenu>
        <NavMenu>
          {menu2.map(navmenu => (
            <Button
              primary={navmenu.type && navmenu.type === "cta"}
              key={navmenu.path}
              text={navmenu.label}
              onClick={() => navigate(navmenu.path)}
            />
          ))}
        </NavMenu>
        <MenuIcon active={navActive} setNavActive={setNavActive} />
      </NavBar>

      <MobileMenu active={navActive}>
        <NavMenu>
          {menu1.map(navmenu => (
            <Button key={navmenu.path} text={navmenu.label} onClick={() => navigate(navmenu.path)} />
          ))}
        </NavMenu>
        <NavMenu>
          {menu2.map(navmenu => (
            <Button
              primary={navmenu.type && navmenu.type === "cta"}
              key={navmenu.path}
              text={navmenu.label}
              onClick={() => navigate(navmenu.path)}
            />
          ))}
        </NavMenu>
      </MobileMenu>
    </ContentWrapper>
  );
};

export default AppNavBar;
