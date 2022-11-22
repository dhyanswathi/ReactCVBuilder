import './login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, { useState } from 'react';

function Login() {
  const url = ''
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log(res.data)
      })
  }

  function handle(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  return (
    <div>
      <div className='login'>
        <h2>Login</h2>

           <form className='login-form' onSubmit={(e) => submit(e)} >
            <input onChange={(e) => handle(e)} id="email" defaultValue={data.email} placeholder='email' className='login-input'></input>
            <input type='password' onChange={(e)=>handle(e)} id='password' defaultValue={data.password} placeholder='password' className='login-input'></input>
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