import React from "react";
import './Resume.css';
import art from '../Pictures/art.jpg'
import ProfileImage from "./ProfileImage";

function Resume () {
    const name = localStorage.getItem("Name");
    const email = localStorage.getItem("Email");
    const phoneNumber = localStorage.getItem("PhoneNumber");
    const linkedIn = localStorage.getItem("LinkedIn");
    const summary = localStorage.getItem("Summary");
    const education = localStorage.getItem("Education");
    const workExperince = localStorage.getItem("WorkExperince");
    const technicalSkills = localStorage.getItem("TechnicalSkills");
    const languages = localStorage.getItem("Languages");
    const certificates = localStorage.getItem("Certificates");

    function printpage() {
        
        var printButton = document.getElementById("printpagebutton");
    
        printButton.style.visibility = 'hidden';
        
        window.print()
        printButton.style.visibility = 'visible';
    }

    return (
        <section id="resume">
            <h1>{name}</h1>
            <article className="info">
                <span>{email}</span><br />
                <span>{phoneNumber}</span><br />
                <span>{linkedIn}</span><br />
            </article>
            <aside><img className="image" src={art}></img></aside>
            <p>{summary}</p>
            <h4>Education</h4>
            <p>{education}</p>
            <h4>Experience</h4>
            <p>{workExperince}</p>
            <h4>Skills</h4>
            <p>{technicalSkills}</p>
            <h4>Languages</h4>
            <p>{languages}</p>
            <h4>Certificates</h4>
            <p>{certificates}</p>
            <button id="printpagebutton" onClick={printpage}>PRINT</button>

        </section>
    )
}

export default Resume;