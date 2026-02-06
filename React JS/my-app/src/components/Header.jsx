// Create a function components

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    // JSX fragments :- which is allow to create Html elements within the javascript code.
    <>
      <div className="header">
        <h1>Learning React JS</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
