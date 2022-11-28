import React, {useState} from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function SignUp() {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    let navigate = useNavigate();

    const postData = (e) => {
      e.preventDefault();
        axios.post(`https://cvwebapiappcli3.azurewebsites.net/api/userlogin`, {
          userLoginId: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          validateStatus: function(status) {
            if(status === 201){
              navigate('/Form');
            }
            if (status === 500)
            {
              alert('The user already exists');
            }
          }
        });
        navigate('/Form');
    }
  
    return ( 
      <>
      <Header></Header>
      <section id='signupform'>
        <h2 id='title'>Sign Up</h2>
      <form id='user-inputs'className='row'>

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

        <button variant="primary" type="submit" id='btnAddTodo' 
        onClick={postData}>Sign Up</button>
      </form>
      </section>
      <Footer></Footer>
        </>
    )
    
}

export default SignUp;