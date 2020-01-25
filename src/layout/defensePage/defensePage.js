import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import "./defensePage.scss";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import AircreftGrid from "../aircraftGrid/aircraftGrid";

const DefensePage = () => {
  const { defense, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="defense-page">
      <Hero src={defense[0].description1.image} title="Defense" />
      <DescriptionSection content={defense[0].description1} />
      <AircreftGrid aircraft={defense[1].products} />
    </div>
  );
};

export default DefensePage;
