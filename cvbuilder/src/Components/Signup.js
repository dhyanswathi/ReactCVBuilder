import React, {useState} from 'react';
import './Signup.css';
// import { Link } from "react-router-dom";

function SignUp() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const postData = (e) => {
        
    }
    
    return (
      <><section id='signupform'>
        <h2 id='title'>Sign Up</h2>
      <form id='user-inputs'className='row'>
        <label className='labels'>Name</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your name.." onChange={(e) => setName(e.target.value)}></input><br/>
        <label>Email</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}></input><br/>
        <label>Enter password</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input><br/>
        {/* <label>Re-enter password</label><br/>
        <input className='input-fields'></input><br/> */}
        <button variant="primary" type="submit" id='btnAddTodo' onClick={postData}>Sign Up</button>
      </form>
      </section></>
    )
    
}

export default SignUp;