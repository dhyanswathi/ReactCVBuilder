import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //useNavigate

function Login() {
  // let navigate = useNavigate();
  const Baseurl = `https://cvwebapiappcli3.azurewebsites.net/api/userlogin/`

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function submit(e) {
    e.preventDefault();
    axios.get(Baseurl + '/' + data.email, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log(res.data)
      })
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);
    }

  return (
    <div>
      <section className='login'>
        <h2>Login</h2>

        <form className='login-form' onClick={(e) => submit(e)}>
          <input placeholder='name' onChange={(e) => handle(e)} id="email" defaultValue={data.email} className='login-input'></input>
          <input placeholder='password' onChange={(e) => handle(e)} id='password' defaultValue={data.password} className='login-input'></input>
          <button className='login-button'>Log in</button>
          <p className='message'>
            Don't have an account?
            <Link to="/Signup"> Sign up here</Link>
          </p>
        </form>

      </section>
    </div>
  );
}

export default Login;