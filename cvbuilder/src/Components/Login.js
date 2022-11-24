import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; //useNavigate

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
    })

  }
  const newData = { ...data }
  function handle(e) {
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(newData);
  }

  return (
    <div>
      <section className='login'>
        <h2>Login</h2>

        <form className='login-form' onClick={(e) => submit(e)}>
          <input placeholder='email' onChange={(e) => handle(e)} id="email" type='email' defaultValue={data.email} className='login-input'></input>
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
// const Login = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();
//   if (!isAuthenticated) {
//       return <button
//           onClick={() => loginWithRedirect()}>
//       Log In</button>;
//   }
// };

// export default Login;