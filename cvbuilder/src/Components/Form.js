import React from "react";
import PersonalInfo from "./PersonalInfo";
import ProfileImage from "./ProfileImage";
import "./Form.css";
import "./ProfileImage.css";


function Form() {
  
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>

        <form className="row">
        <ProfileImage></ProfileImage>
        <PersonalInfo></PersonalInfo>
         
          <label className='labels'>Education & Training</label>
          <br />
          <input className='input-fields'></input>
          <br />
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
          <label className='labels'>Links</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <label className='labels'>Certificates</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <button variant="primary" type="submit" id='btnAddTodo'>Submit</button>
        </form>
      </section>
    </div>
  );
}


export default Form;
