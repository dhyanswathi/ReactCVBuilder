import './login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div className='login'>
        <h2>Login</h2>

          <form className='login-form'>
            <label>Email</label><br/>
            <input type='text' placeholder='email' className='login-input'></input><br/>
            <label>Enter password</label><br/>
            <input type='password' placeholder='password' className='login-input'></input><br/>
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