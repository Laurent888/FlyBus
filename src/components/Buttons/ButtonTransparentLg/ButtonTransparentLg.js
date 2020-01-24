import React from "react";
import "./ButtonTransparentLg.scss";
import { Link } from "react-router-dom";

const ButtonTransparentLg = props => {
  return (
    <div className="btn-large-trans">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.label}
      </a>
    </div>
  );
};

export default ButtonTransparentLg;
