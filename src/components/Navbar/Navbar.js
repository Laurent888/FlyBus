import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FlybusContext } from "../../context/context";

const Navbar = () => {
  const { handleMenuToggle, menuOpen, isDarkTheme } = useContext(FlybusContext);

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
            <Link to="/commercial">Commercial</Link>
          </li>
          <li>
            <Link to="/defense">Defense</Link>
          </li>
          <li>
            <Link to="/space">Space</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/">Our company</Link>
          </li>
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
