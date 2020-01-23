import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg from "../../img/airbus-family.jpg";
import Hero from "../../components/Hero/Hero";
import AircraftGrid from "../aircraftGrid/aircraftGrid";
import DescriptinSection from "../../components/DescriptionSection/DescriptionSection";
import ArticleHighlightSection from "../../layout/articleHighlightSection/articleHighlightSection";
import Footer from "../footer/footer";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero src={HeroImg} title="Commercial Aircraft" />
      <AircraftGrid />
      <DescriptinSection />
      <ArticleHighlightSection />
      <Footer />
      Hello from homepage
    </div>
  );
};

export default homepage;
