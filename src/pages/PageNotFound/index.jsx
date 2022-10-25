import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavBar from "components/shared/Navigation/Navbar";
import { SectionHero } from "pages/Home/Styles";

const PageNotFound = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();
  useEffect(() => {
    const pageTimer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
    return () => clearTimeout(pageTimer);
  }, [navigate]);

  useEffect(() => {
    const counterTimer = setTimeout(() => {
      setTimer(time => time - 1);
    }, 1000);
    return () => clearTimeout(counterTimer);
  }, [timer]);

  return (
    <div>
      <AppNavBar />
      <SectionHero>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              marginTop: "-50px",
              fontWeight: "700",
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "2rem",
            }}
          >
            This page has not been implemented yet.
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>
            You will redirected to homepage in{" "}
            <span style={{ height: "50rem", color: "white", fontSize: "3rem" }}>{timer}</span>s.
          </p>
        </div>
      </SectionHero>
    </div>
  );
};

export default PageNotFound;
