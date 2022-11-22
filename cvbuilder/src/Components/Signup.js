import React, {useState} from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    let navigate = useNavigate();
    const postData = (e) => {
      e.preventDefault();
      axios.post(`https://cvwebapiappcli3.azurewebsites.net/api/UserLogin`, {
        email,
        firstName,
        lastName,
        password
      });
      navigate("/");
    }
    
    return (
      <><section id='signupform'>
        <h2 id='title'>Sign Up</h2>
      <form id='user-inputs'className='row'>
        <label className='labels'>First Name</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your first name.." onChange={(e) => setFirstName(e.target.value)}></input><br/>
        <label className='labels'>Last Name</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your last name.." onChange={(e) => setLastName(e.target.value)}></input><br/>
        <label>Email</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}></input><br/>
        <label>Enter password</label><br/>
        <input className='input-fields' type="text" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input><br/>
        <button variant="primary" type="submit" id='btnAddTodo' onClick={postData}>Sign Up</button>
      </form>
      </section></>
    )
    
}

export default SignUp;