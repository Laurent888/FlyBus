import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./AircraftCard.scss";

const AircraftCard = props => {
  console.log(props.match);
  return (
    <Link to={`${props.match.url}/${props.title}`}>
      <div className="card">
        <div>
          <img
            src={props.src}
            alt={props.title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <h3 className="card-heading">{props.title}</h3>
      </div>
    </Link>
  );
};

export default withRouter(AircraftCard);
