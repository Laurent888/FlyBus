import React, { Fragment } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import data from "../../data";
import FooterCredit from "../../components/FooterCredit/FooterCredit";

const footer = () => {
  const renderedUtilities = data.footer.utilities.map(utility => (
    <Fragment>
      <Link>{utility}</Link>
    </Fragment>
  ));
  const renderedCategories = data.footer.categories.map(category => (
    <Link>{category}</Link>
  ));
  const renderedPopular = data.footer.popular.map(popular => (
    <Link>{popular}</Link>
  ));

  return (
    <Fragment>
      <div className="section">
        <div className="footer row">
          <div className="logo">
            <Logo />
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
      <FooterCredit />
    </Fragment>
  );
};

export default footer;
