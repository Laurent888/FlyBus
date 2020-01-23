import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="row">
      <Logo />
      <ul className="navlist">
        <li>
          <Link>Commercial</Link>
        </li>
        <li>
          <Link>Defence</Link>
        </li>
        <li>
          <Link>Space</Link>
        </li>

        <li>
          <Link>Careers</Link>
        </li>
        <li>
          <Link>Our company</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
