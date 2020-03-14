import React from "react";
import { Link } from "react-router-dom";

import commercial from "../../img/a220-family.jpg";
import military from "../../img/comanche.jpg";

import "./SectionHeader.scss";

const SectionHeader = () => {
  return (
    <section className="SectionHeader">
      <div className="section-left">
        <div className="link-container">
          <Link to="/commercial">
            <h5 className="SectionHeader-title">Commercial Products</h5>
            <img src={commercial} alt="commercial page" />
          </Link>
        </div>
      </div>
      <div className="section-right">
        <div className="link-container">
          <Link to="/military">
            <h5 className="SectionHeader-title">Military Products</h5>
            <img src={military} alt="military page" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
