import React from "react";
import "./DescriptionSection.scss";
import data from "../../data";

const DescriptionSection = () => {
  const flybusPresentation = data.homepage[0].description1;
  return (
    <div className="row descriptionSection my-3">
      <h3 className="m-heading">
        Flybus Commercial Airplanes: A Better Way To Fly.
      </h3>
      <p>{flybusPresentation}</p>
    </div>
  );
};

export default DescriptionSection;
