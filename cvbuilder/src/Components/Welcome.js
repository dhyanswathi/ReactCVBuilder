import React from 'react';
import './Welcome.css';
import picture from '../Pictures/picture.png'

function Welcome() {
    return (
        <div>
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
                    <button className='welcome-btn'>Make Your Resume</button>
                </section>

                <section>
                    <img src={picture} alt="welcome pic" className='welocme-pic' />
                </section>

            </div>
        </div>
    )
}
export default Welcome;