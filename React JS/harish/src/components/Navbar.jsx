import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header
        style={{
          backgroundColor: "green",
          color: "white",
        }}
      >
        <nav>
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div>
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
                <Link to={"/signup"}>signup</Link>  
             </li>
            
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
