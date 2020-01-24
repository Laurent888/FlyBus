import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import "./defensePage.scss";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";

const DefensePage = () => {
  const { defense, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Hero src={defense[0].description1.image} title="Defense" />
      <DescriptionSection content={defense[0].description1} />
    </div>
  );
};

export default DefensePage;
