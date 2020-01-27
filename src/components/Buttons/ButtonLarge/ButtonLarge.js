import React from "react";
import "./ButtonLarge.scss";

const ButtonLarge = props => {
  return (
    <div className={`btn-large ${props.btnType}`}>
      <button onClick={props.clicked}>{props.label}</button>
    </div>
  );
};

export default ButtonLarge;
