import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = ({ darkTheme }) => {
  return (
    <Link to="/" className={`logo ${darkTheme && "darkTheme"}`}>
      FlyBus
    </Link>
  );
};

export default Logo;
