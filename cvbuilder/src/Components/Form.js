import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import Headerform from "./Headerform";
import "./ProfileImage.css";


function Form() {
  const initialContact = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    LinkedIn: "",
    Summary: "",
    Education: "",
    WorkExperince: "",
    TechnicalSkills: "",
  };
  const [info, setInfo] = useState(initialContact);
  let navigate = useNavigate();

  const handleChangeFor = (propertyName) => (event) => {
    setInfo((info) => ({
      ...info,
      [propertyName]: event.target.value,
    }));
  };

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
    navigate("/Resume");
  }
  return (
    <div>
      <Headerform></Headerform>
      <section id="myform">
        <h2 id="title">Form</h2>
        <form className="row">
          <ProfileImage></ProfileImage>
          <label className="labels">Name</label>
          <br />
          <input
            type="text" required='required'
            onChange={handleChangeFor("Name")}
            value={info.Name}
          ></input>
          <br />
          <label className="labels">Email</label>
          <br />
          <input
            type="email" required='required'
            onChange={handleChangeFor("Email")}
            value={info.Email}
          ></input>
          <br />
          <label className="labels">Phone Number</label>
          <br />
          <input
            type="text" required='required'
            onChange={handleChangeFor("PhoneNumber")}
            value={info.PhoneNumber}
          ></input>
          <br />

          <label className="labels">LinkedIn</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("LinkedIn")}
            value={info.LinkedIn}
          ></input>
          <br />

          <label className="labels">Summary</label>
          <br />
          <input
            type="text" required='required'
            onChange={handleChangeFor("Summary")}
            value={info.Summary}
          ></input>
          <br />

          <label className="labels">Education</label>
          <br />
          <textarea onChange={handleChangeFor("Education")} required='required'
            value={info.Education} rows="8" cols="100"></textarea>
          <br />
          <label className="labels">Work Experince</label>
          <br />
          <textarea
            onChange={handleChangeFor("WorkExperince")} required='required'
            value={info.WorkExperince} rows="8" cols="100"
          ></textarea>
          <br />
          <label className="labels">Skills</label>
          <br />
          <textarea
            onChange={handleChangeFor("TechnicalSkills")} required='required'
            value={info.TechnicalSkills} rows="8" cols="100"
          ></textarea>
          <br />
          <label className="labels">Languages</label>
          <br />
          <textarea
            onChange={handleChangeFor("Languages")} required='required'
            value={info.Languages} rows="6" cols="100"
          ></textarea>
          <br />
          <label className="labels">Certificates</label>
          <br />
          <textarea
            onChange={handleChangeFor("Certificates")}
            value={info.Certificates} rows="4" cols="100"
          ></textarea>
          <br />
          <button variant="primary" type="submit" id="btnAddTodo"
           onClick={onSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form;