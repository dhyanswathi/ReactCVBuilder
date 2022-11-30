import React from "react";
import './Resume3.css';
import { useNavigate } from 'react-router-dom';

function Resume3 () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Templates");
    };

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
        
        var printButton = document.getElementById("printpagebutton3");
        var backButton = document.getElementById("gobackbutton3");
        printButton.style.visibility = 'hidden';
        backButton.style.visibility = 'hidden';
        window.print()
        printButton.style.visibility = 'visible';
        backButton.style.visibility = 'visible';
    }
    return (
        <section id="resume3">
             <style>
              {`@media print {#resume3 {
    margin: auto;
    max-width: 100%;
  }}`}
          </style>
            <h1 className="template-heading3">{name}</h1>
            <section className="template-section3">
            <article className="template-content3">
                <h4>CONTACT</h4>
                <span>{email}</span><br />
                <span>{phoneNumber}</span><br />
                <span>{linkedIn}</span><br />
            </article>
            <div className="template-content3"> <h4>ABOUT ME</h4>
            <p>{summary}</p></div>
            
            <div className="template-content3"><h4>SKILLS</h4>
                <p dangerouslySetInnerHTML={{ __html: technicalSkills }}/></div>
                <div className="template-content3"><h4>EDUCATION</h4>
                <p dangerouslySetInnerHTML={{ __html: education }} /></div>
                <div className="template-content3"><h4>LANGUAGES</h4>
                <p dangerouslySetInnerHTML={{ __html: languages }}/></div>
                <div className="template-content3"><h4>EXPERIENCE</h4>
                <p dangerouslySetInnerHTML={{ __html: workExperince }}/></div>
                <div className="template-content3"><h4>CERTIFICATES</h4>
                <p dangerouslySetInnerHTML={{ __html: certificates }}/></div>
            </section>
            <button id="printpagebutton3" onClick={printpage}>PRINT</button>
            <button id="gobackbutton3" className='temp-btn' onClick={handleClick}>Go Back To Previous Section</button>
        </section>
    )
}

export default Resume3;
