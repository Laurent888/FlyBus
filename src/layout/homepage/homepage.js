import React from "react";
import HeroImg from "../../img/airbus-family.jpg";
import Hero from "../../components/Hero/Hero";
import AircraftGrid from "../aircraftGrid/aircraftGrid";
import DescriptinSection from "../../components/DescriptionSection/DescriptionSection";
import ArticleHighlightSection from "../../layout/articleHighlightSection/articleHighlightSection";
import data from "../../data";

const homepage = () => {
  const flybusPresentation = data.homepage[0].description1;
  return (
    <div>
      <Hero src={HeroImg} title="Commercial Aircraft" />
      <AircraftGrid />
      <DescriptinSection content={flybusPresentation} />
      <ArticleHighlightSection />
    </div>
  );
};

export default homepage;
