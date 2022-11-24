import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import "./Form.css";
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
    localStorage.setItem("Education", info.Education);
    localStorage.setItem("WorkExperince", info.WorkExperince);
    localStorage.setItem("TachnicalSkills", info.TechnicalSkills);
    localStorage.setItem("Languages", info.Languages);
    localStorage.setItem("Certificates", info.Certificates);
  }
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>

        <form onSubmit={onSubmit} className="row">
          <ProfileImage></ProfileImage>
          <label className="labels">Name</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("Name")}
            value={info.Name}
          ></input>
          <br />
          <label className="labels">Email</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("Email")}
            value={info.Email}
          ></input>
          <br />
          <label className="labels">Phone Number</label>
          <br />
          <input
            type="text"
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
            type="text"
            onChange={handleChangeFor("Summary")}
            value={info.Summary}
          ></input>
          <br />

          <label className="labels">Education</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("Education")}
            value={info.Education}
          ></input>
          <br />
          <label className="labels">Work Experince</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("WorkExperince")}
            value={info.WorkExperince}
          ></input>
          <br />
          <label className="labels">Technical Skills</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("TechnicalSkills")}
            value={info.TechnicalSkills}
          ></input>
          <br />
          <label className="labels">Languages</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("Languages")}
            value={info.Languages}
          ></input>
          <br />
          <label className="labels">Certificates</label>
          <br />
          <input
            type="text"
            onChange={handleChangeFor("Certificates")}
            value={info.Certificates}
          ></input>
          <br />
          <button variant="primary" type="submit" id="btnAddTodo">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form;
