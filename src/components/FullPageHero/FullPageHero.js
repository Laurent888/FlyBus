import React from "react";
import "./FullPageHero.scss";
import ButtonTransparentLg from "../Buttons/ButtonTransparentLg/ButtonTransparentLg";

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
