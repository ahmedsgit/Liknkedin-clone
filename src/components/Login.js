import '../styles/Login.css';
import loginLogo from '../images/linkedinLogo.png';
import heroImage from '../images/linkedin-hero.png';
import SignIn from './SignIn';
import Topic from './Topic';
import Suggestion from './Suggetion';
import PostJob from './PostJob';
import ProfileSlider from './ProfileSlider';

function Login() {
    return (
        <div className="login-container">
            <div className='login'>
                <div className='nav'>
                    <a href="/">
                        <img src={ loginLogo } alt="login Logo" />
                    </a>
                    <div className='nav-button'>
                        <a className='registration' href="/registration">Join now</a>
                        <a className='login' href="/login">Sign in</a>
                    </div>
                </div>
                <div className='hero-section'>
                    <div className='left'>
                        <h3> Welcome to your professional community</h3>
                        <SignIn />
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
        </div>
        
    )
}

export default Login