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
             <style>
              {`@media print {#resume {
    margin: auto;
    max-width: 100%;
  }}`}
          </style>
            <h1>{name}</h1>
            <article className="info">
                <span>{email}</span><br />
                <span>{phoneNumber}</span><br />
                <span>{linkedIn}</span><br />
            </article>
            {/* <aside><img className="image" src={art}></img></aside> */}
            <p>{summary}</p>
            <h4>Education</h4>
            <p dangerouslySetInnerHTML={{ __html: education }} />
            <h4>Experience</h4>
            <p dangerouslySetInnerHTML={{ __html: workExperince }}/>
            <h4>Skills</h4>
            <p dangerouslySetInnerHTML={{ __html: technicalSkills }}/>
            <h4>Languages</h4>
            <p dangerouslySetInnerHTML={{ __html: languages }}/>
            <h4>Certificates</h4>
            <p dangerouslySetInnerHTML={{ __html: certificates }}/>
            <button id="printpagebutton" onClick={printpage}>PREVIEW</button>

        </section>
    )
}


export default Resume;