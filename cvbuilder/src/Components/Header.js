import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => { 
    return (
    <section className="topnav">
            <Link to="/" className="nav-left">Home</Link>
            <Link to="/About" className="nav-left">About</Link>
            <Link to="/Login" className="nav-right">Log In</Link>
            <Link to="/Signup" className="nav-right">Sign Up</Link>
    </section>
    )
}
 
export default Header;
