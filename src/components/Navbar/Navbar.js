import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FlybusContext } from "../../context/context";

const Navbar = () => {
  const { handleMenuToggle, menuOpen } = useContext(FlybusContext);
  return (
    <div className="navbar">
      <div className="row">
        <Logo />
        <ul className={`navlist ${menuOpen ? "show" : null}`}>
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
          className={`hamburger-menu ${menuOpen ? "open" : null}`}
          onClick={handleMenuToggle}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
