import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <h1>Learn React js</h1>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Login</li>
                </ul>
            </div>
        </>
    )
}

export default Header;