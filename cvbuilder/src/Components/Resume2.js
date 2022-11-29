import React from "react";
import './Resume2.css';
import image from '../Pictures/person.png';

function Resume2() {
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
                <section className="section1">
                    <img className="image" alt="" src={image}></img>
                </section>
                <section className="section2">
                    <span>{email}</span><br />
                    <span>{phoneNumber}</span><br />
                    <span>{linkedIn}</span><br />
                </section>
            </article>
            <p>{summary}</p>
            <section className="resume-section">
                <div className="resume-content1"><h4>Skills</h4>
                    <p dangerouslySetInnerHTML={{ __html: technicalSkills }} /></div>
                <div className="resume-content1"><h4>Education</h4>
                    <p dangerouslySetInnerHTML={{ __html: education }} /></div>
                <div className="resume-content2"><h4>Languages</h4>
                    <p dangerouslySetInnerHTML={{ __html: languages }} /></div>
                <div className="resume-content2"><h4>Experience</h4>
                    <p dangerouslySetInnerHTML={{ __html: workExperince }} /></div>
                <div className="resume-content3"><h4>Certificates</h4>
                    <p dangerouslySetInnerHTML={{ __html: certificates }} /></div>
            </section>
            <button id="printpagebutton" onClick={printpage}>PRINT</button>
        </section>
    )
}
export default Resume2;