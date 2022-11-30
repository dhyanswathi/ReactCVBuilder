import React from "react";
import './Resume2.css';
import image from '../Pictures/person.png';
import { useNavigate } from 'react-router-dom';

function Resume2() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Templates");
    };

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

        var printButton = document.getElementById("printpagebutton2");
        var backButton = document.getElementById("gobackbutton2");
        printButton.style.visibility = 'hidden';
        backButton.style.visibility = 'hidden';
        window.print()
        printButton.style.visibility = 'visible';
        backButton.style.visibility = 'visible';
    }
    return (
        <section id="resume2">
            <style>
                {`@media print {#resume2 {
    margin: auto;
    max-width: 100%;
  }}`}
            </style>
            <h1 className="h1-resume2">{name}</h1>
            <article className="info2">
                <section className="section1">
                    <img className="image2" alt="" src={image}></img>
                </section>
                <section className="section2">
                    <span>{email}</span><br />
                    <span>{phoneNumber}</span><br />
                    <span>{linkedIn}</span><br />
                </section>
            </article>
            <p>{summary}</p>
            <section className="resume2-section">
                <div className="resume2-content1"><h4>Skills</h4>
                    <p dangerouslySetInnerHTML={{ __html: technicalSkills }} /></div>
                <div className="resume2-content1"><h4>Education</h4>
                    <p dangerouslySetInnerHTML={{ __html: education }} /></div>
                <div className="resume2-content2"><h4>Languages</h4>
                    <p dangerouslySetInnerHTML={{ __html: languages }} /></div>
                <div className="resume2-content2"><h4>Experience</h4>
                    <p dangerouslySetInnerHTML={{ __html: workExperince }} /></div>
                <div className="resume2-content3"><h4>Certificates</h4>
                    <p dangerouslySetInnerHTML={{ __html: certificates }} /></div>
            </section>
            <button id="printpagebutton2" onClick={printpage}>PRINT</button>
            <button id="gobackbutton2" onClick={handleClick}>Go Back To Previous Section</button>
        </section>
    )
}
export default Resume2;