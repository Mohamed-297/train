import React from 'react'


export default function login() {
function handleSubmit(e){
    e.preventDefault();
    console.log("loggedIn successfully")
}
    return (
    <form onSubmit={handleSubmit} className='loginContainer'>
        
        <button className='loginBtn'>Login</button>
    </form>
  )
}
