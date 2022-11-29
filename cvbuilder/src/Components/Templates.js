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
        <section>
        <Link to="/Resume">
        <img className="template-pics" src={Template1} alt="welcome pic"/>
                    </Link>
        <Link to="/Resume2">
        <img className="template-pics" src={Template2} alt="welcome pic" />
        </Link>
        <Link to="/Resume3">
        <img className="template-pics" src={Template1} alt="welcome pic" />
        </Link>
        </section>
        </div>
        </>
    )

}

export default Templates;