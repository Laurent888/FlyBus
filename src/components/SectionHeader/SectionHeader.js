import React from "react";
import { Link } from "react-router-dom";

import commercial from "../../img/a220-family.jpg";
import military from "../../img/comanche.jpg";

import "./SectionHeader.scss";

const SectionHeader = () => {
  return (
    <section className="SectionHeader">
      <div className="section-left">
        <Link to="/commercial" className="link-container">
          <h5 className="SectionHeader-title">Commercial Products</h5>
          <img src={commercial} alt="commercial page" />
        </Link>
      </div>
      <div className="section-right">
        <Link to="/defense" className="link-container">
          <h5 className="SectionHeader-title">Military Products</h5>
          <img src={military} alt="military page" />
        </Link>
      </div>
    </section>
  );
};

export default SectionHeader;
