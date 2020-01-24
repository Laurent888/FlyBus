import React from "react";
import { Link } from "react-router-dom";
import "./ButtonTransparent.scss";

const ButtonTransparent = props => {
  return (
    <div>
      <Link to={props.url} className="button-transparent">
        <span>{props.label}</span>
        <i className="fas fa-arrow-right" />
      </Link>
    </div>
  );
};

export default ButtonTransparent;
