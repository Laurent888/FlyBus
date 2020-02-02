import React from "react";
import "./TechSpecification.scss";
import RetailPrice from "./RetailPrice/RetailPrice";

const TechSpecification = props => {
  const spec = props.spec;
  return (
    <div className="specification section">
      <div className="row">
        <div>
          <h3 className="m-heading">Technical Specs</h3>
          <div className="specification-table my-3">
            <ul className="specification-list categories">
              <li>Seats</li>
              <li>Maximun seats</li>
              <li>Length</li>
              <li>Wingspan</li>
              <li>Height</li>
              <li>Engine</li>
            </ul>
            <ul className="specification-list figures">
              <li>{spec.seats}</li>
              <li>{spec.maxSeats}</li>
              <li>{spec.length} m</li>
              <li>{spec.wingspan} m</li>
              <li>{spec.height} m</li>
              <li>{spec.engine}</li>
            </ul>
          </div>
        </div>
        <RetailPrice spec={spec} />
      </div>
    </div>
  );
};

export default TechSpecification;
