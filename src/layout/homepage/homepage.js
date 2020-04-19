import React, { useContext } from "react";

import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import duskHero from "../../img/dusk-hero.jpg";
import DescriptinSection from "../../components/DescriptionSection/DescriptionSection";
import ArticleHighlightSection from "../../layout/articleHighlightSection/articleHighlightSection";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Homepage = () => {
  const { homepageDescription, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading page...</p>;
  }

  const handleScroll = (e) => {
    console.log(e.target);
  };

  const flybusPresentation = homepageDescription[1].description2;
  return (
    <div onScroll={handleScroll}>
      <Hero src={duskHero} title="Flybus: Beyond Limits" />
      <DescriptinSection content={flybusPresentation} />
      <SectionHeader />
      <ArticleHighlightSection />
    </div>
  );
};

export default Homepage;
