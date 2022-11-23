import React, {useState} from "react";

function PersonalInfo() {
    const initialContact = { Name: "", Email: "", PhoneNumber: "", LinkedIn: "", Summary: "" };

    const [info, setInfo] = useState(initialContact);

  const handleChangeFor = (propertyName) => (event) => {
    setInfo((info) => ({
      ...info,
      [propertyName]: event.target.value
    }));
    };

    return (
        <section id="peronal">
        <form id="peronal-info" className="row">
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
          </form>
        </section>
    )
}

export default PersonalInfo;