import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import commercial from "../../img/a220-family.jpg";
import military from "../../img/comanche.jpg";

import "./SectionHeader.scss";

const SectionHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="SectionHeader">
      <div className="section-left">
        <Link to="/commercial" className="link-container">
          <h5 className="SectionHeader-title">{t("home.commercialProduct")}</h5>
          <img src={commercial} alt="commercial page" />
        </Link>
      </div>
      <div className="section-right">
        <Link to="/defense" className="link-container">
          <h5 className="SectionHeader-title">{t("home.militaryProduct")}</h5>
          <img src={military} alt="military page" />
        </Link>
      </div>
    </section>
  );
};

export default SectionHeader;
