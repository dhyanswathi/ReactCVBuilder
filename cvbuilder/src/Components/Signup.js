import React, {useState} from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import floortile from '../Pictures/floortile.png';

function SignUp() {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    let navigate = useNavigate();
    const postData = (e) => {
      e.preventDefault();
      axios.post(`https://resumewebapiappcli3.azurewebsites.net/api/userlogin`, {
        userLoginId: email,
          firstName: firstName,
          lastName: lastName,
          password: password
    }).then(response => {
      if(response.status === 201){
        localStorage.setItem("username",email);
        navigate('/form');
      }
      else 
      {
        alert('User already exists');
      }
    }).catch(error => {
        console.log(error)
    });
    }
  
    return ( 
      <div className='signup-main' style={{ backgroundImage: `url(${floortile})` }}>
      <Header></Header>
      <section id='signupform'>
        <h2 id='title'>Sign Up</h2>
      <form id='user-inputs'className='row' onSubmit={postData}>

        <label htmlFor='name-first'>First Name</label>
        <input className='name-first' type="text" required='required'
        onChange={(e) => setFirstName(e.target.value)}></input><br/>

        <label htmlFor='name-last'>Last Name</label>
        <input className='name-last' type="text" required='required' 
        onChange={(e) => setLastName(e.target.value)}></input><br/>

        <label htmlFor='email'>Email</label>
        <input className='email' type="email" required='required' 
        onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label htmlFor='password'>Enter password</label>
        <input className='password' type="password" required='required'
        onChange={(e) => setPassword(e.target.value)}></input><br/>

        <button variant="primary" type="submit" id='btnAddTodo'>Sign Up</button>
      </form>
      </section>
      <Footer></Footer></div>
    )
    
}

export default SignUp;