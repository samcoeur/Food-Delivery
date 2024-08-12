import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const[currentState ,setCurrentState] = useState('Login')
  return (
    <div className='login'>
      <form className="login-container">
        <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
            {currentState==='Login'?<></>:
            <input type="text" placeholder='Your name' required/>
          }
            <input type="email" placeholder='email' required />
            <input type="password" placeholder='password' required />
            <button>{currentState === 'Sign Up'? 'create Account':'Login'}</button>
        </div>
       
        <div className="login-condition">
            <input type="checkbox" required />
            <p>By Continuing, I agree to terms</p>
        </div>
        {currentState ==='Login'?
        <p>Create a new account ? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p>:
        <p>Already have an account ? <span onClick={()=> setCurrentState('Login')}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default Login
