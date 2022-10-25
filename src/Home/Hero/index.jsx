import React from "react";
import { ContentWrapper, SectionHero } from "../Styles";
import { ContentLeft, ContentRight, PageContent } from "./Styles";
import data from "data";
import getSourceSetFromArray from "shared/utils/stringUtils";
import Button from "components/shared/Buttons";

const Hero = ({ mediaDesktop }) => {
  const hero = data.hero;

  const imgArray = mediaDesktop ? hero.images.desktop : hero.images.mobile;
  const image1x = imgArray.find(i => i.size === "1x").image;
  const sourceSet = getSourceSetFromArray(imgArray);

  return (
    <SectionHero>
      <ContentWrapper>
        <PageContent>
          <ContentLeft>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
            <Button primary text={hero.ctaText} />
          </ContentLeft>
          <ContentRight>
            <img src={image1x} srcSet={sourceSet} alt={hero.title} />
          </ContentRight>
        </PageContent>
      </ContentWrapper>
    </SectionHero>
  );
};

export default Hero;
