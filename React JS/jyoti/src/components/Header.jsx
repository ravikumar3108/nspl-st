import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const nav = useNavigate()

    function handleLogout() {
        localStorage.removeItem("jyoti")
        nav("/about")
    }

    return (
        <>
            <div className="header">
                <h1>Learn React js</h1>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><button className="" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
        </>
    )
}

export default Header;