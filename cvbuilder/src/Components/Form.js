import React, {useState} from "react";
import ProfileImage from "./ProfileImage";
import "./Form.css";
import "./ProfileImage.css";


function Form() {
  const initialContact = { Name: "", Email: "", PhoneNumber: "", LinkedIn: "", Summary: "" };
    const [info, setInfo] = useState(initialContact);
  const handleChangeFor = (propertyName) => (event) => {
    setInfo((info) => ({
      ...info,
      [propertyName]: event.target.value
    }));
    };
  
  return (
    <div>
      <section id="myform">
        <h2 id="title">Form</h2>

        <form className="row">
        <ProfileImage></ProfileImage>
        <label className='labels'>Name</label>
          <br />
          <input type="text"
        onChange={handleChangeFor("Name")}
        value={info.Name}></input>
          <br />
          <label className='labels'>Email</label>
          <br />
          <input type="text"
        onChange={handleChangeFor("Email")}
        value={info.Email}></input>
          <br />
          <label className='labels'>Phone Number</label>
          <br />
          <input type="text"
        onChange={handleChangeFor("Phone Number")}
        value={info.PhoneNumber}></input>
          <br />
          <label className='labels'>LinkedIn</label>
          <br />
          <input type="text"
        onChange={handleChangeFor("LinkedIn")}
        value={info.LinkedIn}></input>
          <br />
          <label className='labels'>Summary</label>
          <br />
          <input type="text"
        onChange={handleChangeFor("Summary")}
        value={info.Summary}></input>
         
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
