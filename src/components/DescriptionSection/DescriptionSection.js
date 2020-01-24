import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import "./DescriptionSection.scss";

const DescriptionSection = props => {
  const { addLineBreak } = useContext(FlybusContext);

  return (
    <div className="section">
      <div className="row descriptionSection my-3">
        <h3 className="m-heading">{props.content.title}</h3>
        <p>{addLineBreak(props.content.content)}</p>
      </div>
    </div>
  );
};

export default DescriptionSection;
