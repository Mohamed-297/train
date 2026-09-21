import React from 'react'
import "./login.css"

export default function Login() {
function handleSubmit(e){
    e.preventDefault();
    console.log("loggedIn successfully")
}
function handleRegister(){
    // e.preventDefault();
    console.log("went to register")
}
    return (
    <form onSubmit={handleSubmit} className='loginContainer'>
        <h2 className='loginHeader'>Login</h2>
        <div className='userLogin'>
            <label for="email" className='email'>Email</label>
            <input id='email' type='text' placeholder='Email'/>

            <label for="password">Password</label>        
            <input id='password' type='password' placeholder='Password'/>
        </div>

        <div className='btnsContainer'>
            <button className='loginBtn'>Login</button>

            <label for="register">Don't have account yet?</label>        
            <button type='button' id='register' className='loginBtn' onClick={handleRegister}>Register</button>
        </div>

    </form>
  )
}
