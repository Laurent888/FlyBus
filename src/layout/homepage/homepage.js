import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import duskHero from "../../img/dusk-hero.jpg";
import DescriptinSection from "../../components/DescriptionSection/DescriptionSection";
import ArticleHighlightSection from "../../layout/articleHighlightSection/articleHighlightSection";

const Homepage = () => {
  const { homepageDescription, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading page...</p>;
  }

  const flybusPresentation = homepageDescription[1].description2;
  return (
    <div>
      <Hero src={duskHero} title="Flybus: Beyond Limits" />
      <DescriptinSection content={flybusPresentation} />
      <ArticleHighlightSection />
    </div>
  );
};

export default Homepage;
