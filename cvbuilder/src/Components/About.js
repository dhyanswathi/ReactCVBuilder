import React from "react";
import Header from "./Header";
import './About.css';
import Footer from "./Footer";
import floortile from '../Pictures/floortile.png';

function About() {
    return (
        <div className="homepage" style={{ backgroundImage: `url(${floortile})` }}><Header></Header>
        <article className="about">
            <h1>Did you know?</h1>
            <p>Every time you apply for a new job, you should make sure the resume 
                speaks directly to the job description. That means, your resume may 
                not need to be entirely different, but you’ll likely want to make at 
                least a few minor updates. If you’re applying for a different type of 
                job, you may want a completely different resume, from the content all 
                'the way to the format. With all the different templates to choose from, 
                take advantage of our resume builder and create a variety of resumes to 
                fit both your personality and your different job applications.</p>

           <p> Landyour dream job with the help of one of our
             professionally-designed resume templates. Download to PDF or print.
            Effortlessly make a job-worthy resume
             and cover letter that gets you hired faster.</p>
        </article>
        <Footer></Footer>
        </div> 
    )

}

export default About;