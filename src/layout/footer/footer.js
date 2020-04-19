import React, { Fragment, useContext } from "react";

import { FlybusContext } from "../../context/context";
import "./footer.scss";
import Logo from "../../components/Logo/Logo";
import data from "../../data";
import FooterCredit from "../../components/FooterCredit/FooterCredit";

const Footer = () => {
  const { isDarkTheme } = useContext(FlybusContext);

  const renderedUtilities = data.footer.utilities.map((utility) => (
    <Fragment key={utility}>
      <p>{utility}</p>
    </Fragment>
  ));
  const renderedCategories = data.footer.categories.map((category) => (
    <Fragment key={category}>
      <p>{category}</p>
    </Fragment>
  ));
  const renderedPopular = data.footer.popular.map((popular) => (
    <Fragment key={popular}>
      <p>{popular}</p>
    </Fragment>
  ));

  return (
    <Fragment>
      <div className={`section ${isDarkTheme && "darkThemeLight"}`}>
        <div className="footer row">
          <div className="logo">
            <Logo darkTheme={isDarkTheme} />
          </div>

          <div className="footer-item">
            <ul>
              <li>Utility</li>
              {renderedUtilities}
            </ul>
          </div>
          <div className="footer-item">
            <ul>
              <li>Categories</li>
              {renderedCategories}
            </ul>
          </div>
          <div className="footer-item">
            <ul>
              <li>Popular</li>
              {renderedPopular}
            </ul>
          </div>
        </div>
      </div>
      <FooterCredit isDarkTheme={isDarkTheme} />
    </Fragment>
  );
};

export default Footer;
