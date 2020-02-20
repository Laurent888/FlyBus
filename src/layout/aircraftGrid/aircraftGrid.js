import React, { Fragment } from "react";
import "./aircraftGrid.scss";
import AircraftCard from "../../components/Card/AircraftCard/AircraftCard";
import PropTypes from "prop-types";

const AircraftGrid = props => {
  return (
    <div className="section-dark">
      <h2 className="row m-heading">Current Products</h2>
      <div className="aircraft-grid row">
        {props.aircraft.map(item => (
          <Fragment key={item.id}>
            <AircraftCard title={item.name} src={item.image} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AircraftGrid;

AircraftGrid.propTypes = {
  aircraft: PropTypes.array.isRequired
};
