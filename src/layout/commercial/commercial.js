import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import HeroImg from "../../img/airbus-family.jpg";
import Hero from "../../components/Hero/Hero";
import AircraftGrid from "../aircraftGrid/aircraftGrid";
import DescriptinSection from "../../components/DescriptionSection/DescriptionSection";

const Homepage = () => {
  const { aircraft, homepageDescription, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading page...</p>;
  }

  const flybusPresentation = homepageDescription[0].description1;
  console.log(flybusPresentation);
  return (
    <div>
      <Hero src={HeroImg} title="Commercial Aircraft" />
      <AircraftGrid aircraft={aircraft} />
      <DescriptinSection content={flybusPresentation} />
    </div>
  );
};

export default Homepage;
