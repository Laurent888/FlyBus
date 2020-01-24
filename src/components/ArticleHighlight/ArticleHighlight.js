import React from "react";
import "./ArticleHighlight.scss";
import ButtonTransparent from "../Buttons/ButtonTransparent/ButtonTransparent";

const ArticleHighlight = props => {
  return (
    <div className="article-highlight row">
      <div></div>
      <img
        src={props.image[0]}
        alt="flybus-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
      <div className="article-highlight__content">
        <h3 className="lg-title">{props.title}</h3>
        <ButtonTransparent label="Learn More" className="btn" url={props.url} />
      </div>
    </div>
  );
};

export default ArticleHighlight;
