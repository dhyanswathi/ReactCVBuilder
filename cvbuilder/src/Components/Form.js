import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const linkedIn = useRef(null);
  const summary = useRef(null);
  const education = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const languages = useRef(null);
  const certificates = useRef(null);

  function handleClick() {
    name.current.focus();
  }
  
  
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>
        <form className="row" onSubmit={handleClick}>
        <label className='labels'>Name</label>
          <br />
          <input type="text"
        ref={name}></input>
          <br />
          <label className='labels'>Email</label>
          <br />
          <input type="text"
        ref={email}></input>
          <br />
          <label className='labels'>Phone Number</label>
          <br />
          <input type="text"
       ref={phone}></input>
          <br />
          <label className='labels'>LinkedIn</label>
          <br />
          <input type="text"
        ref={linkedIn}></input>
          <br />
          <label className='labels'>Summary</label>
          <br />
          <input type="text"
        ref={summary}></input><br />
        <label className='labels'>Education & Training</label>
          <br />
          <input className='input-fields' type="text" ref={education}></input>
          <br />
          <label className='labels'>Work Experince</label>
          <br />
          <input className='input-fields' type="text" ref={experience}></input>
          <br />
          <label className='labels'>Techinical Skills</label>
          <br />
          <input className='input-fields' type="text" ref={skills}></input>
          <br />
          <label className='labels'>Languages</label>
          <br />
          <input className='input-fields' type="text" ref={languages}></input>
          <br />
          <label className='labels'>Certificates</label>
          <br />
          <input className='input-fields' type="text" ref={certificates}></input>
          <br />
          <button variant="primary" type="submit" id='btnAddTodo'>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Form;