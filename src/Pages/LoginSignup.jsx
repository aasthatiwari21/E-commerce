import React from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Your Email'/>
          <input type="password" name="" id="" placeholder='Your Password'/>
        </div>
        <button>Continuee</button>
        <p className="loginsignup-login">
          Already have an account <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="abc" />
          <p>By continuing , i agree to the term of use & privacy policy.</p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup
