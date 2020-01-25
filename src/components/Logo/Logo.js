import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/commercial" className="logo">
      FlyBus
    </Link>
  );
};

export default Logo;
