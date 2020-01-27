import React from "react";
import "./Hero.scss";

// This component need : title, src

const Hero = props => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div></div>
        <img
          src={props.src}
          alt="hero"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </div>
      <div className="row">
        <div className="row-container">
          <div></div>
          <h2 className="hero-heading">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
