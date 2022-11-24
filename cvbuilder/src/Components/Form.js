import React, {useState} from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { Link, useNavigate } from "react-router-dom";

function Form({info}) {
  const [ userInput, setUserInput ] = useState([]);

  let navigate = useNavigate();

  const postResume = (e) => {
    e.preventDefault();
    setUserInput("");
      navigate("/Resume");
    }
  
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
          <button variant="primary" type="submit" id='btnAddTodo' 
        onClick={postResume}>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Form;