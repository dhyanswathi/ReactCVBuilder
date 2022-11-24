import React from "react";
import './Resume.css';
import picture from '../Pictures/picture.png'

function Resume () {

    return (
        <section id="resume">
            <h1>SWATHI SIDHARTHAN</h1>
            <article className="info">
                <span>Email</span><br />
                <span>PhoneNumber</span><br />
                <span>LinkedIn</span><br />
            </article>
            <aside><img src={picture} alt="add your pic"></img></aside>
            <p>My family and I visited The Epcot center this summer. The weather was nice,
                and Epcot was amazing! I had a great summer together with my family!
            My family and I visited The Epcot center this summer. The weather was nice,
                and Epcot was amazing! I had a great summer together with my family!
           My family and I visited The Epcot center this summer. The weather was nice, and
                Epcot was amazing! I had a great summer together with my family!</p>
        </section>
    )
}

export default Resume;