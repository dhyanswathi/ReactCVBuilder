import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    <section className="topnav">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Login">LOGIN</Link>
            <Link to="/Signup">SignUp</Link>
    </section>
    )
}

export default Header;
