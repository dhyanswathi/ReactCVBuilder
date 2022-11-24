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
          
        </form>
    );
}

export default Education;