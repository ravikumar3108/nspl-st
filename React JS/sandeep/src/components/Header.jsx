import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/createProduct"}>createProduct</Link>
          </li>

          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
