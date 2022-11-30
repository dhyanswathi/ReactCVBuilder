import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import floortile from '../Pictures/floortile.png';

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
      password: data.password,
      validateStatus: function(status) {
        if(status === 200){
          localStorage.setItem("username", data.email);
          navigate('/form');
        }
        else if(status === 404)
        {
          alert('wrong user or pass')
        }
      }
    })
  }
  
  const newData = { ...data }
  
  function handle(e) {
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div className='login-main' style={{ backgroundImage: `url(${floortile})` }}>
      <Header></Header>
      <section className='login'>
        <h2 className='h2-login'>Login</h2>
        <form className='login-form' onSubmit={(e) => submit(e)} >
          <label className='login-label'>Email</label><br />
          <input placeholder='email' onChange={(e) => handle(e)} required='required'
          id="email" type='email' defaultValue={data.email} className='login-input' />
          <label className='login-label'>Password</label><br />
          <input placeholder='password' type='password' onChange={(e) => handle(e)} required='required'
          id='password' defaultValue={data.password} className='login-input'></input>
          <button className='login-button'>Log in</button>
          <p className='message'>
            Don't have an account?
            <Link to="/Signup"> Sign up here</Link>
          </p>
        </form>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Login;
