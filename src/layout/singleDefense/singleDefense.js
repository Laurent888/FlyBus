import React, { useContext } from "react";

import "./singleDefense.scss";
import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import ErrorPage from "../errorPage/errorPage";
import RetailPrice from "../../components/TechSpecification/RetailPrice/RetailPrice";

const SingleDefense = (props) => {
  const { defense, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading data...</p>;
  }

  const defenseSlug = props.match.params.defense.toUpperCase();

  const defenseData = defense[1].products.filter((item) => {
    return defenseSlug === item.name;
  });
  if (defenseData.length === 0) {
    return <ErrorPage />;
  }

  const heroImg = defenseData[0].singlePage.description.image;
  const textDescription = defenseData[0].singlePage.description;
  return (
    <div>
      <Hero title={`Flybus ${defenseSlug}`} src={heroImg} />
      <DescriptionSection content={textDescription} />
      <div className="section">
        <div className="row">
          <RetailPrice spec={defenseData[0].singlePage.specification} />
        </div>
      </div>
    </div>
  );
};

export default SingleDefense;
