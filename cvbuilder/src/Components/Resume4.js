import React from "react";
import './Resume4.css';

function Resume4 () {
    const name = localStorage.getItem("Name").toUpperCase();
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
        
        var printButton = document.getElementById("printpagebutton4");
    
        printButton.style.visibility = 'hidden';
        
        window.print()
        printButton.style.visibility = 'visible';
    }
    return (
        <section id="resume4" className="cv4">
             <style>
              {`@media print {#resume4 {
    margin: auto;
    max-width: 100%;
  }}`}
          </style>
            <h1 className="cv-heading">{name}</h1>
            <article className="cv-info">
                <span>{email}</span><br />
                <span>{phoneNumber}</span><br />
                <span>{linkedIn}</span><br />
            </article>
            <h4>SUMMARY</h4>
            <p>{summary}</p>
                <div className="cv-content"><h4>Education</h4>
                <p dangerouslySetInnerHTML={{ __html: education }} /></div>
                <div className="cv-content"><h4>Experience</h4>
                <p dangerouslySetInnerHTML={{ __html: workExperince }}/></div>

                <section className="cv-section">
                <div className="cv-content"><h4>Skills</h4>
                <p dangerouslySetInnerHTML={{ __html: technicalSkills }}/></div>
                <div className="cv-content"><h4>Languages</h4>
                <p dangerouslySetInnerHTML={{ __html: languages }}/></div>               
                <div className="cv-content"><h4>Certificates</h4>
                <p dangerouslySetInnerHTML={{ __html: certificates }}/></div>
            </section>
            <button id="printpagebutton4" onClick={printpage}>PRINT</button>
        </section>
    )
}

export default Resume4;