import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Headerform = () => { 
    let navigate = useNavigate();
    const onLinkClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    return (
    <section className="topnav">
            <Link to="/" className="nav-left">Home</Link>
            <Link to="/About" className="nav-left">About</Link>
            <span className="nav-right">{localStorage.getItem('username')}</span>
            <Link to="/" className="nav-right" onClick={onLinkClick}>Logout</Link>
    </section>
    )
}

export default Headerform;