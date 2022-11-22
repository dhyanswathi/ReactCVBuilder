import React from 'react';
import './welcome.css';
import { Link, Routes, Route } from 'react-router-dom'
import picture from '../Pictures/picture.png'
import Login from './Login';

function Welcome() {
    return (
        <div>
            {/* <nav className='nav'>
                <Link to="/Home" className='nav-left' style={{listStyleType:'none'}} >Home</Link>
                <Link to="/About" className='nav-left'>About</Link>
                <Link to="/Signup" className='nav-right'>Signup</Link>
                <Link to="/Login" className='nav-right'>Login</Link>
            </nav> */}

            <Routes>
                <Route path="/Login" element={<Login />} />
                {/* <Route path="/Signup" element={<Signup />} /> */}
            </Routes>

            <h3>Welcome to the CVbuilder</h3>

            <div className='welcome'>
                <section>
                    <h5>Build Your Resume For Free</h5>
                    <p>A CV is a short document that gives you a chance to show a prospective employer the best of what you've got.
                        It sells your skills, experience, and shows them you're the right person for the job.
                        Making a good impression is important in today's competitive job market.
                        Your CV will be your first contact with employers so it's essential to get it right.
                        A mistake-free CV says you're professional and care how you come across.
                        Bullet points make it easier to scan for key skills.
                        Keep it short: no more than two pages.
                        Don't leave gaps: if you've had time to travel or care for a relative, say what you learned from the experience.
                    </p>
                    <button className='welcome-btn'>presspls</button>
                </section>

                <section>
                    <img src={picture} alt="welcome pic" className='welocme-pic' />
                </section>

            </div>

            <footer>footer should come here</footer>
        </div>
    )
}
export default Welcome;