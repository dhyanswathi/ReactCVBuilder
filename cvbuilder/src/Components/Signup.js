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
        axios.get(`https://cvwebapiappcli3.azurewebsites.net/api/userlogin/${email}`, {
          validateStatus: function(status) {
            // if(status === 200){
            //   alert('The user already exists');
            // }
            if(status === 404)
            {
              axios.post(`https://cvwebapiappcli3.azurewebsites.net/api/userlogin`, {
                userLoginId: email,
                firstName: firstName,
                lastName: lastName,
                password: password
              });
              navigate("/Form"); 
            }
          }
        })
      }
  
    return ( 
      <>
      <Header></Header>
      <section id='signupform'>
        <h2 id='title'>Sign Up</h2>
      <form id='user-inputs'className='row'>
        <label className='labels'>First Name</label><br/>
        <input required className='input-fields' type="text"
        onChange={(e) => setFirstName(e.target.value)}></input><br/>

        <label className='labels'>Last Name</label><br/>
        <input className='input-fields' type="text" aria-required='true' 
        onChange={(e) => setLastName(e.target.value)}></input><br/>
        <label>Email</label><br/>
        <input className='input-fields' type="email" required='required' 
        onChange={(e) => setEmail(e.target.value)}></input><br/>
        <label>Enter password</label><br/>
        <input className='input-fields' type="password" required='required'
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