import './login.css';

function Login() {
  return (
    <div>
      <div className='login'>

        <section className='section1'>

          <h3 className='login-title'>Log In</h3>

          <form className='login-form'>
            <input placeholder='email' className='login-input'></input>
            <input placeholder='password' className='login-input'></input>
            <button className='login-button'>Log in</button>
          </form>

        </section>
        
        <section className='section2'></section>
      </div>
    </div>
  );
}

export default Login;