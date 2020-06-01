import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { FlybusContext } from "../../context/context";
import "./DescriptionSection.scss";

// This component needs : content.title & content.content

const DescriptionSection = (props) => {
  const { addLineBreak, isDarkTheme } = useContext(FlybusContext);
  const { t } = useTranslation();

  return (
    <section className={`section ${isDarkTheme && "darkTheme"}`}>
      <div className="row descriptionSection">
        <h3 className="m-heading">{t("home.welcome")}</h3>
        <p>{addLineBreak(t("home.presentation"))}</p>
      </div>
    </section>
  );
};

export default DescriptionSection;

DescriptionSection.propTypes = {
  content: PropTypes.object.isRequired,
};
