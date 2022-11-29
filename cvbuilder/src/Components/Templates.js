import React from "react";
import Headerform from "./Headerform";
import { Link} from 'react-router-dom';
import Template1 from '../Pictures/Template1.png';
import Template2 from '../Pictures/Template2.png';
import './Templates.css';

function Templates() {
    return (
        <><Headerform></Headerform>
        <div className="template">
        <h1 className="template-heading">Please select a template for your resume</h1>
        <Link to="/Resume">
        <img src={Template1} alt="welcome pic"/>
                    </Link>
        <Link to="/Resume">
        <img src={Template2} alt="welcome pic" />
        </Link></div>
        </>
    )

}

export default Templates;