import React from 'react';
import './welcome.css';
import { Link, Routes, Route } from 'react-router-dom'
import picture from '../Pictures/picture.png'
import Login from './Login';
import SignUp from './Signup'

function Welcome() {
    return (
        <div>

            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>

            <h3>Welcome to the CVbuilder</h3>

            <div className='welcome'>
                <section>
                    <h5>Build Your Resume For Free</h5>
                    <p> As having a strong CV is one of the most import things for job hunting our idea emerged.
                        Seeling yourself on the job market can be quite challenging so we are here to make it simple,
                        making a good impression is fairly important.
                        You CV is the first contact between you and your potential employer.
                        Keep it simple and within one page if posible.
                    </p>
                    <button className='welcome-btn'>Build your CV</button>
                </section>

                <section>
                    <img src={picture} alt="welcome pic" className='welcome-pic' />
                </section>

            </div>

            <footer></footer>
        </div>
    )
}
export default Welcome;