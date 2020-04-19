import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./AircraftCard.scss";
import PropTypes from "prop-types";

const AircraftCard = (props) => {
  const { match, title, src } = props;

  return (
    <Link to={`${match.path}/${title}`}>
      <div className={`card ${props.isDarkTheme && "darkTheme"}`}>
        <div className="img-container">
          <img
            src={src}
            alt={title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <h3 className="card-heading">{title}</h3>
      </div>
    </Link>
  );
};

export default withRouter(AircraftCard);

AircraftCard.propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
