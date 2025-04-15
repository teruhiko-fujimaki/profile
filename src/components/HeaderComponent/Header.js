import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/">home</a>
          </li>
          <li className="last">
            <a href="https://www.youtube.com/@mackyosaka">youtube</a>
          </li>
          <li className="last">
            <a href="https://www.facebook.com/osaka.macky">facebook</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
