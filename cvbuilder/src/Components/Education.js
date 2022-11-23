import React, {useState} from "react";

function Education() {

    const [text, setText] = useState("•");
        const change = (e) => {
            setText(e.target.value);
        };
        const checkEnter = (e) => {
            if (e.key === "Enter") {
            setText(text + "•" + " ");
            }
        };

    return (
        <form id="education" className="row">
          <label className='labels'>Education & Training</label>
          <br />
          <input className='input-fields' type="text"
        onChange={change} onKeyUp={checkEnter}
        value={text}></input>
          <br />
        </form>
    );
}

export default Education;