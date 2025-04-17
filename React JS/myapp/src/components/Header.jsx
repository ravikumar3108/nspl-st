import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/props"}>Props</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
        </>
    )
}


export default Header