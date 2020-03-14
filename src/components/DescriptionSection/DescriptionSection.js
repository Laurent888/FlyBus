import React, { useContext } from "react";
import { FlybusContext } from "../../context/context";
import "./DescriptionSection.scss";
import PropTypes from "prop-types";

// This component needs : content.title & content.content

const DescriptionSection = props => {
  const { addLineBreak } = useContext(FlybusContext);

  return (
    <section className="section">
      <div className="row descriptionSection">
        <h3 className="m-heading">{props.content.title}</h3>
        <p>{addLineBreak(props.content.content)}</p>
      </div>
    </section>
  );
};

export default DescriptionSection;

DescriptionSection.propTypes = {
  content: PropTypes.object.isRequired
};
