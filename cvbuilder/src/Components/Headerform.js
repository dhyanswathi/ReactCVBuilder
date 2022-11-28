import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Headerform = () => { 
    return (
    <section className="topnav">
            <Link to="/" className="nav-left">Home</Link>
            <Link to="/About" className="nav-left">About</Link>
            <Link to='/Welcome' className="nav-right">Log Out</Link>
    </section>
    )
}

export default Headerform;