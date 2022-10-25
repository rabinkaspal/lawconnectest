import React from "react";
import { Card, CardInfo } from "./Styles";
import getSourceSetFromArray from "shared/utils/stringUtils";

const FeatureCard = ({ feature }) => {
  return (
    <Card>
      <img src={feature.image} srcSet={getSourceSetFromArray(feature.images)} alt={feature.title} />
      <CardInfo>
        <h3>{feature.title}</h3>
        <p>{feature.desc}</p>
      </CardInfo>
    </Card>
  );
};

export default FeatureCard;
