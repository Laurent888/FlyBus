import React from "react";
import "./FullPageHero.scss";
import ButtonTransparentLg from "../Buttons/ButtonTransparentLg/ButtonTransparentLg";
import PropTypes from "prop-types";

const FullPageHero = props => {
  return (
    <div className="fullPageHero">
      <img
        src={props.src}
        alt=""
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />

      <div className="article-content">
        <h2 className="article-content__logo">FlyBus</h2>
        <div className="article-content__text">
          <div className="h-line"></div>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          {props.button && (
            <div className="my-3">
              <ButtonTransparentLg label={props.button} url={props.url} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullPageHero;

FullPageHero.propTypes = {
  button: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
