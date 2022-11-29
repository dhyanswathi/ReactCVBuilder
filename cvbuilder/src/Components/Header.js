import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => { 

    let navigate = useNavigate();
    const onLinkClick = (e) => {
        e.preventDefault();
        localStorage.setItem("username", '');
        navigate('/');
    };

    const username = localStorage.getItem('username');
    let hiddenClass = '';
    let logoutClass = '';
    if(username !== null && username !== ''){
        hiddenClass = 'hide-links';
        logoutClass = '';
    }
    else{
        hiddenClass = '';
        logoutClass = 'hide-links';
    }
    return (
    <section className="topnav">
            <Link to="/" className="nav-left">Home</Link>
            <Link to="/About" className="nav-left">About</Link>
            <span className="nav-right">{username}</span>
            <Link to="/" className={'nav-right '+  logoutClass} onClick={onLinkClick}>Logout</Link>
            <Link to="/Login" className={'nav-right '+  hiddenClass}>Log In</Link>
            <Link to="/Signup" className={'nav-right '+  hiddenClass}>Sign Up</Link>
    </section>
    )
}
 
export default Header;
