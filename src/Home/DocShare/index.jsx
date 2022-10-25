import React from "react";
import { ContentWrapper, SectionDark } from "../Styles";
import { ContentLeft, ContentRight, PageContent } from "./Styles";
import data from "data";
import getSourceSetFromArray from "shared/utils/stringUtils";

const DocShare = () => {
  const docShare = data.docShare;
  return (
    <SectionDark>
      <ContentWrapper>
        <PageContent>
          <ContentLeft>
            <h2>{docShare.title}</h2>
            <p>{docShare.desc1}</p>
            <p>{docShare.desc2}</p>
          </ContentLeft>
          <ContentRight>
            <img src={docShare.image} srcSet={getSourceSetFromArray(docShare.images)} alt={docShare.title} />
          </ContentRight>
        </PageContent>
      </ContentWrapper>
    </SectionDark>
  );
};

export default DocShare;
