import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Navbar.scss";
import { FlybusContext } from "../../context/context";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { handleMenuToggle, menuOpen, isDarkTheme } = useContext(FlybusContext);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState({ lang: "en" });

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className={`navbar ${isDarkTheme && "darkTheme"}`}>
      <div className="row">
        <Logo darkTheme={isDarkTheme} />
        <ul
          className={`navlist ${menuOpen ? "show" : null}`}
          onClick={() => {
            if (menuOpen) {
              handleMenuToggle();
            }
          }}
        >
          <li>
            <Link to="/commercial">{t("menu.commercial")}</Link>
          </li>
          <li>
            <Link to="/defense">{t("menu.defense")}</Link>
          </li>
          <li>
            <Link to="/space">{t("menu.space")}</Link>
          </li>
          <li>
            <Link to="/order">{t("menu.order")}</Link>
          </li>
          <li>
            <Link to="/">{t("menu.company")}</Link>
          </li>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "2px",
              marginLeft: "1rem",
            }}
          >
            <p
              className={`lang ${activeLang.lang === "fr" ? "active" : null}`}
              style={{ marginRight: "1rem" }}
              onClick={() => {
                changeLanguage("fr");
                setActiveLang({ lang: "fr" });
              }}
            >
              fr
            </p>
            <p
              className={`lang ${activeLang.lang === "en" ? "active" : null}`}
              onClick={() => {
                changeLanguage("en");
                setActiveLang({ lang: "en" });
              }}
            >
              en
            </p>
          </div>
        </ul>

        <div
          className={`hamburger-menu ${menuOpen ? "open" : null} ${
            isDarkTheme && "darkTheme"
          }`}
          onClick={handleMenuToggle}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
