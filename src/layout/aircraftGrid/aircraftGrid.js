import React, { Fragment } from "react";
import "./aircraftGrid.scss";
import AircraftCard from "../../components/Card/AircraftCard/AircraftCard";
import data from "../../data";

const aircraftGrid = () => {
  return (
    <div className="section-dark">
      <h2 className="row m-heading">Current Products</h2>
      <div className="aircraft-grid row">
        {data.aircraft.map(item => (
          <Fragment>
            <AircraftCard key={item.id} title={item.name} src={item.image} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default aircraftGrid;
