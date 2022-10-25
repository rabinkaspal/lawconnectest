import React from "react";
import { ContentWrapper, SectionLight } from "../Styles";
import { ContentLeft, ContentRight, PageContent } from "./Styles";
import data from "data";
import getSourceSetFromArray from "shared/utils/stringUtils";

const DocSign = ({ mediaDesktop }) => {
  const docSign = data.docSign;

  const imgArray = mediaDesktop ? docSign.images.desktop : docSign.images.mobile;
  const image1x = imgArray.find(i => i.size === "1x").image;
  const sourceSet = getSourceSetFromArray(imgArray);

  return (
    <SectionLight>
      <ContentWrapper>
        <PageContent>
          <ContentLeft>
            <img src={image1x} srcSet={sourceSet} alt={docSign.title} />
          </ContentLeft>
          <ContentRight>
            <h2>{docSign.title}</h2>
            <p>{docSign.desc}</p>
          </ContentRight>
        </PageContent>
      </ContentWrapper>
    </SectionLight>
  );
};

export default DocSign;
