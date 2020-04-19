import React from "react";
import "./FooterCredit.scss";

const FooterCredit = (props) => {
  return (
    <div className={`footer-credit ${props.isDarkTheme && "darkTheme"}`}>
      <p>Copyright &copy; 2019 - 2020 Flybus. All Rights Reserved.</p>
    </div>
  );
};

export default FooterCredit;
