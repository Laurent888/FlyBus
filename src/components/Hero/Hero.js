import React from "react";
import "./Hero.scss";
import PropTypes from "prop-types";

import { Parallax } from "react-parallax";

// This component need : title, src

const Hero = props => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="overlay"></div>
        <Parallax
          bgImage={props.src}
          bgImageAlt="place background"
          strength={400}
        >
          <div className="parallax-content" />
        </Parallax>
        {/* <img
          src={props.src}
          alt="hero"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        /> */}
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

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
