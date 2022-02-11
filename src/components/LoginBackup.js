import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from "../backend/firebase";
import { login } from '../features/userSlice';
import linkedinLoginPic from '../images/linkedinLogo.png'
import '../styles/Login.css';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginApp = e =>{
        e.preventDefault();
    }
    const register = () =>{
        auth.createUserWithEmailAndPassword(email, password).then(
            userAuth => {
                userAuth.user
                    .updateProfile({
                        displayName : name,
                        profileURL: profilePic,
                }).then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        })
                    )
                }
                )
            }
        ).catch(error => alert(error));
    }
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