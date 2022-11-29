import React from 'react';
import './Welcome.css';
import { Link} from 'react-router-dom'
import picture from '../Pictures/test.jpg'
import Header from './Header';
import Footer from './Footer';

function Welcome() {
    return (
        <div>
            <Header></Header>
            <h3 className='h3-welcome'>Welcome to the Resume Builder</h3>

            <div className='welcome'> 
                <section>
                    <h5 className='h5-welcome'>Build Your Resume For Free</h5>
                    <p className='p-welcome'> As having a strong CV is one of the most import things for job hunting our idea emerged.
                        Seeling yourself on the job market can be quite challenging so we are here to make it simple,
                        making a good impression is fairly important.
                        You CV is the first contact between you and your potential employer.
                        Keep it simple and within one page if posible.
                    </p>
                    <Link to="/Signup">
                        <button className='welcome-btn'>Build your CV</button>
                    </Link>
                </section>

                <section className='welcome-pic'>
                    <img src={picture} alt="welcome pic" className='welcome-pic' />
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Welcome;