import './login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div className='login'>
        <h2>Login</h2>

          <form className='login-form'>
            <input type='text' placeholder='email' className='login-input'></input>
            <input type='password' placeholder='password' className='login-input'></input>
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