import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/" >
          <h3 >Home</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>

        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
