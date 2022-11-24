import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate();
  const Baseurl = `https://cvwebapiappcli3.azurewebsites.net/api/userlogin`

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  function submit(e) {
    e.preventDefault();
     axios.get(Baseurl + '/' + data.email + '/' + data.password, {
      userLoginId: data.email,
      password: data.password
    }
    )
    navigate("/Form");
  }
  const newData = { ...data }
  function handle(e) {
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(newData);
  }
  return (
    <div>
      <div className='login'>
        <h2>Login</h2>

          <form className='login-form' onClick={(e) => submit(e)}>
            <label>Email</label><br/>
            <input type='email' placeholder='email' onChange={(e) => handle(e)} id="email" defaultValue={data.email} className='login-input'></input><br/>
            <label>Enter password</label><br/>
            <input type='password' placeholder='password'  onChange={(e) => handle(e)} id='password' defaultValue={data.password} className='login-input'></input><br/>
            <button className='login-button'>Log in</button>
            <p className='message'>
                Don't have an account? 
                <Link to="/Signup"> Sign up here</Link>
            </p>
          </form>
      </div>
    </div>
  );
}

export default Login;