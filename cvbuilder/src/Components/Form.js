import React, {useState} from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { Link } from "react-router-dom";

function Form() {
  const initialContact = { Name: "", Summary: "", phone: "" };
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>
        <PersonalInfo></PersonalInfo>
        <Education></Education>
        <form className="row">
          <label className='labels'>Work Experince</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <label className='labels'>Techinical Skills</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <label className='labels'>Languages</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <label className='labels'>Certificates</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Form;