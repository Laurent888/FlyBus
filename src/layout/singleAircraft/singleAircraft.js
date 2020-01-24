import React from "react";
import "./singleAircraft.scss";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import ErrorPage from "../errorPage/errorPage";
import TechSpecification from "../../components/TechSpecification/TechSpecification";
import data from "../../data";

const singleAircraft = props => {
  const aircraftSlug = props.match.params.aircraft.toUpperCase();
  const acData = data.aircraft.filter(item => {
    return aircraftSlug === item.name;
  });
  if (acData.length === 0) {
    return <ErrorPage />;
  }

  const heroImg = acData[0].singlePage.description.image;
  const textDescription = acData[0].singlePage.description;
  const spec = acData[0].singlePage.specification;
  return (
    <div>
      <Hero title={`Flybus ${aircraftSlug}`} src={heroImg} />
      <DescriptionSection content={textDescription} />
      <TechSpecification spec={spec} />
    </div>
  );
};

export default singleAircraft;
