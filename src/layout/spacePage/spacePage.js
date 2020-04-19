import React, { useContext } from "react";

import "./spacePage.scss";
import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import AircraftGrid from "../aircraftGrid/aircraftGrid";

const SpacePage = () => {
  const { space, isDarkTheme, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading page...</p>;
  }
  return (
    <div>
      <Hero src={space[0].description1.image} title="Space" />
      <DescriptionSection content={space[0].description1} />
      <AircraftGrid aircraft={space[1].products} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default SpacePage;
