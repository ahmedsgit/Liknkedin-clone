import '../styles/signIn.css';
import GoogleIcon from '../images/googleIcon.png'

function SignIn() {
    return (
        <div className='sign-in'>
            <form className='form'>
                <input type="text" placeholder='Email or phone' />
                <input type="password" placeholder='Password' />
            </form>
            <a href="/forget-password">Forget password?</a>
            <div className='button'>
                <button type='submit'>Sign in</button>
                <p>or</p>
                <button type='submit'>
                    <img className='googleIcon' src={GoogleIcon} alt="icon" />
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    )
}

export default SignIn