import React from "react";
import "./errorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h3>The page you are looking is not found</h3>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
