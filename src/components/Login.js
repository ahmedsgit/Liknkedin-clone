import '../styles/Login.css';
import loginLogo from '../images/linkedinLogo.png';
import heroImage from '../images/linkedin-hero.png';
import SignIn from './SignIn';

function Login() {
    return (
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
                    <SignIn/>
                </div>
                <div className="right">
                    <img src={ heroImage } alt="hero svg" />
                </div>
            </div>
        </div>
    )
}

export default Login