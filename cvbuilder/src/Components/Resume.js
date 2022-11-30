import React from "react";
import './Resume.css';
import { useNavigate } from 'react-router-dom';

function Resume () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Templates");
    };

    const name = localStorage.getItem("Name");
    const email = localStorage.getItem("Email");
    const phoneNumber = localStorage.getItem("PhoneNumber");
    const linkedIn = localStorage.getItem("LinkedIn");
    const summary = localStorage.getItem("Summary");
    const education = localStorage.getItem("Education").replace(/\r?\n/g, '<br />');
    const workExperince = localStorage.getItem("WorkExperince").replace(/\r?\n/g, '<br />');
    const technicalSkills = localStorage.getItem("TechnicalSkills").replace(/\r?\n/g, '<br />');
    const languages = localStorage.getItem("Languages").replace(/\r?\n/g, '<br />');
    const certificates = localStorage.getItem("Certificates").replace(/\r?\n/g, '<br />');
    
    function printpage() {
        var printButton = document.getElementById("printpagebutton");
        var backButton = document.getElementById("gobackbutton");
        printButton.style.visibility = 'hidden';
        backButton.style.visibility = 'hidden';
        window.print()
        printButton.style.visibility = 'visible';
        backButton.style.visibility = 'visible';
    }

    return (
        <section id="resume">
             <style>
              {`@media print {#resume {
    margin: auto;
    max-width: 100%;
  }}`}
          </style>
            <h1 className="resume-heading">{name}</h1>
            <article className="info">
                <span>{email}</span><br />
                <span>{phoneNumber}</span><br />
                <span>{linkedIn}</span><br />
            </article>
            <p>{summary}</p>
            <section className="resume-section">
            <div className="resume-content"><h4>Skills</h4>
                <p dangerouslySetInnerHTML={{ __html: technicalSkills }}/></div>
                <div className="resume-content"><h4>Education</h4>
                <p dangerouslySetInnerHTML={{ __html: education }} /></div>
                <div className="resume-content"><h4>Languages</h4>
                <p dangerouslySetInnerHTML={{ __html: languages }}/></div>
                <div className="resume-content"><h4>Experience</h4>
                <p dangerouslySetInnerHTML={{ __html: workExperince }}/></div>
                <div className="resume-content"><h4>Certificates</h4>
                <p dangerouslySetInnerHTML={{ __html: certificates }}/></div>
            </section>
            <button id="printpagebutton" onClick={printpage}>PRINT</button>
            <button id="gobackbutton" className='temp-btn' onClick={handleClick}>Go Back To Previous Section</button>
        </section>
    )
}

export default Resume;
