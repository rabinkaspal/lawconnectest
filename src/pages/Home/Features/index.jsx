import React from "react";
import { ContentWrapper, SectionLight } from "../Styles";
import { FeatureContainer, PageContent } from "./Styles";
import data from "data";
import FeatureCard from "components/shared/Cards/Feature";

const Features = () => {
  const feature = data.feature;
  return (
    <SectionLight>
      <ContentWrapper>
        <PageContent>
          <h2>{feature.title}</h2>
          <FeatureContainer>
            {feature.features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </FeatureContainer>
        </PageContent>
      </ContentWrapper>
    </SectionLight>
  );
};

export default Features;
