import React, { useContext } from "react";

import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import ErrorPage from "../errorPage/errorPage";

const SingleSpace = (props) => {
  const { space, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading data...</p>;
  }

  const spaceSlug = props.match.params.space.toUpperCase();

  const spaceData = space[1].products.filter((item) => {
    return spaceSlug === item.name;
  });
  if (spaceData.length === 0) {
    return <ErrorPage />;
  }

  const heroImg = spaceData[0].singlePage.description.image;
  const textDescription = spaceData[0].singlePage.description;
  return (
    <div>
      <Hero title={`Flybus ${spaceSlug}`} src={heroImg} />
      <DescriptionSection content={textDescription} />
    </div>
  );
};

export default SingleSpace;
