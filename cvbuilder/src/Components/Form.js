import React, { useState, useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import Headerform from "./Headerform";
import floortile from '../Pictures/floortile.png';

function Form() {
  const initialContact = {
    Name: localStorage.getItem("Name"),
    Email: localStorage.getItem("Email"),
    PhoneNumber: localStorage.getItem("PhoneNumber"),
    LinkedIn: localStorage.getItem("LinkedIn"),
    Summary: localStorage.getItem("Summary"),
    Education: localStorage.getItem("Education"),
    WorkExperince: localStorage.getItem("WorkExperince"),
    TechnicalSkills: localStorage.getItem("TechnicalSkills"),
    Languages: localStorage.getItem("Languages"),
    Certificates: localStorage.getItem("Certificates")
  };

  const [info, setInfo] = useState(initialContact);
  let navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if(!username) {
      navigate('/login');
    }
  });

  const handleChangeFor = (propertyName) => (event) => {
    setInfo((info) => ({
      ...info,
      [propertyName]: event.target.value,
    }));
  };

  let previousLength = 0;

const handleInput = (event) => {
  const bullet = "\u2022";
  const newLength = event.target.value.length;
  const characterCode = event.target.value.substr(-1).charCodeAt(0);

  if (newLength > previousLength) {
    if (characterCode === 10) {
      event.target.value = `${event.target.value}${bullet} `;
    } else if (newLength === 1) {
      event.target.value = `${bullet} ${event.target.value}`;
    }
  }
  
  previousLength = newLength;
}

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("Name", info.Name);
    localStorage.setItem("Email", info.Email);
    localStorage.setItem('PhoneNumber', info.PhoneNumber);
    localStorage.setItem("LinkedIn", info.LinkedIn);
    localStorage.setItem("Summary", info.Summary);
    localStorage.setItem("Education", info.Education.replace(/\r?\n/g, '<br />'));
    localStorage.setItem("WorkExperince", info.WorkExperince.replace(/\r?\n/g, '<br />'));
    localStorage.setItem("TechnicalSkills", info.TechnicalSkills.replace(/\r?\n/g, '<br />'));
    localStorage.setItem("Languages", info.Languages.replace(/\r?\n/g, '<br />'));
    localStorage.setItem("Certificates", info.Certificates.replace(/\r?\n/g, '<br />'));
    navigate("/Templates");
  }
  return (
    <div className="form-div" style={{ backgroundImage: `url(${floortile})` }}>
      <Headerform></Headerform>
      <h2 className="form-title">Enter your details here...</h2>
      <form className="form-row">
        <article className="form-article">
          <section className="form-section1">
            <label className="labels1">Name</label>
            <br />
            <input className="form-input"
              type="text" required='required'
              onChange={handleChangeFor("Name")}
              value={info.Name}
            ></input>
            <br />
            <label className="labels1">Email</label>
            <br />
            <input className="form-input"
              type="email" required='required'
              onChange={handleChangeFor("Email")}
              value={info.Email}
            ></input>
            <br />
            <label className="labels1">Phone Number</label>
            <br />
            <input className="form-input"
              type="text" required='required'
              onChange={handleChangeFor("PhoneNumber")}
              value={info.PhoneNumber}
            ></input>
            <br />

            <label className="labels1">LinkedIn</label>
            <br />
            <input className="form-input"
              type="text"
              onChange={handleChangeFor("LinkedIn")}
              value={info.LinkedIn}
            ></input>
            <br />

          </section>

          <section className="form-section2">
            <label className="labels2">Summary</label>
            <br />
            <textarea className="form-textarea"
              rows="8" cols="100" required='required'
              onChange={handleChangeFor("Summary")}
              value={info.Summary}
            ></textarea>
            <br/>

            <label className="labels2">Education</label>
            <br />
            <textarea onChange={handleChangeFor("Education")} onInput={handleInput} 
            required='required' className="form-textarea"
              value={info.Education} rows="8" cols="100"></textarea>
            <br /></section>

            <section className="form-section3">
            <label className="labels2">Work Experince</label><br />
            <textarea className="form-textarea" onInput={handleInput} 
              onChange={handleChangeFor("WorkExperince")} required='required'
              value={info.WorkExperince} rows="8" cols="100"
            ></textarea>
            <br />
            
            <label className="labels2">Languages</label>
            <br />
            <textarea className="form-textarea" onInput={handleInput} 
              onChange={handleChangeFor("Languages")} required='required'
              value={info.Languages} rows="6" cols="100"
            ></textarea>
            <br /></section>

            <section className="form-section4">
            <label className="labels2">Skills</label>
            <br />
            <textarea className="form-textarea" onInput={handleInput} 
              onChange={handleChangeFor("TechnicalSkills")} required='required'
              value={info.TechnicalSkills} rows="8" cols="100"
            ></textarea>
            <br />

            <label className="labels2">Certificates</label>
            <br />
            <textarea className="form-textarea" onInput={handleInput} 
              onChange={handleChangeFor("Certificates")}
              value={info.Certificates} rows="4" cols="100"
            ></textarea>

          </section>
        </article>
        <button variant="primary" type="submit" id="form-btn"
          onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;