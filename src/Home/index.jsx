import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Features from "./Features";
import AppNavBar from "components/shared/Navigation/Navbar";
import { Footer, HomePage } from "./Styles";
import DocShare from "./DocShare";
import DocSign from "./DocSign";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowReSize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowReSize);
    return () => {
      window.removeEventListener("resize", handleWindowReSize);
    };
  }, []);

  const isMediaDesktop = width >= 769;

  return (
    <HomePage>
      <AppNavBar mediaDesktop={isMediaDesktop} />
      <Hero mediaDesktop={isMediaDesktop} />
      <Features />
      <DocShare />
      <DocSign mediaDesktop={isMediaDesktop} />
      <Footer />
    </HomePage>
  );
};

export default Home;
