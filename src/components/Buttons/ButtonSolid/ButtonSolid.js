import React from "react";
import { Link } from "react-router-dom";
import "./ButtonSolid.scss";

const ButtonSolid = props => {
  return (
    <Link to="/" className="button-solid">
      <span>{props.label}</span>
      <i className="fas fa-arrow-right" />
    </Link>
  );
};

export default ButtonSolid;
