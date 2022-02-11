import React, { useState } from 'react'
import linkedinLoginPic from '../images/linkedinLogo.png'
import '../styles/Login.css'

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("")


    const loginApp = e =>{
        e.preventDefault();
    }
    const register = () =>{}
    return (
        <div className='login'>
            <img src={linkedinLoginPic} alt="" />
            <form>
                <input value={ name } onChange={ e => setName(e.target.value) }  type="text"  placeholder='Full Name'/>
                <input value={ profilePic } onChange={ e => setProfilePic(e.target.value) } type="text"  placeholder='Profile pic URL (optional)'/>
                <input value={ email } onChange={ e => setEmail(e.target.value) } type="text"  placeholder='Email'/>
                <input value={ password } onChange={ e => setPassword(e.target.value) } type="password"  placeholder='Password'/>
                <button onClick={ loginApp } type='submit' >Sign in</button>
            </form>
            <p>Not a member?
                <span className='register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login