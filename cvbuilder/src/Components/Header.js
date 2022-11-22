import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    <section className="topnav">
            <Link to="/" className="nav-left">HOME</Link>
            <Link to="/About" className="nav-left">ABOUT</Link>
            <Link to="/Login" className="nav-right">LOGIN</Link>
            <Link to="/Signup" className="nav-right">SignUp</Link>
    </section>
    )
}

export default Header;
