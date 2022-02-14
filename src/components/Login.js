import { auth } from "../backend/firebase";
import '../styles/Login.css';
import loginLogo from '../images/app/linkedinLogo.png';
import heroImage from '../images/app/linkedin-hero.png';
import SignIn from './SignIn';
import Topic from './Topic';
import Suggestion from './Suggetion';
import PostJob from './PostJob';
import ProfileSlider from './ProfileSlider';
import Footer from './Footer';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginApp = e => {
        e.preventDefault();
    };
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then(
            userAuth => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        profileURL: profilePic,
                    }).then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    }
                    );
            }
        ).catch(error => alert(error));
    }
    return (
        <div className="login-container">
            <div className='login'>
                <div className='nav'>
                    <a href="/">
                        <img src={ loginLogo } alt="login Logo" />
                    </a>
                    <div className='nav-button'>
                        <a onClick={ register } className='registration' href="/registration">Join now</a>
                        <a className='login' href="/login">Sign in</a>
                    </div>
                </div>
                <div className='hero-section'>
                    <div className='left'>
                        <h3> Welcome to your professional community</h3>
                        <SignIn name={name} email={email} password={password} profilePic={profilePic} loginApp={loginApp} setName={setName} setEmail={setEmail} setPassword={setPassword} setProfilePic={setProfilePic}/>
                    </div>
                    <div className="right">
                        <img src={ heroImage } alt="hero svg" />
                    </div>
                </div>
            </div>
            <div className="recent">
                <Topic title="Explore topics you are interested in"/>
            </div>
            
            <div className="suggesion">
                <Suggestion title="Find the right job or internship for you"/>
            </div>
            <PostJob/>
            <ProfileSlider/>
            <Footer/>
        </div>
    )
}

export default Login