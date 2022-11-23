import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>
        <form id="user-inputs" className="row">
          <label className='labels'>Name</label>
          <br />
          <input className='input-fields'></input>
          <br />
          <label className='labels'>Summary</label>
          <br />
          <input className='input-fields'></input>
          <br />
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
        </form>
      </section>
    </div>
  );
}

export default Form;
