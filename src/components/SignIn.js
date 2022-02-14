import '../styles/signIn.css';
import GoogleIcon from '../images/app/googleIcon.png'

function SignIn({name, setName, profilePic, setProfilePic, email, setEmail, password, setPassword, loginApp}) {
    return (
        <div className='sign-in'>
            <form className='form'>
                <input value={ name } onChange={ e => setName(e.target.value) } type="text" placeholder='Name' />
                <input value={ profilePic } onChange={ e => setProfilePic(e.target.value) } type="text" placeholder='profile pic' />
                <input value={ email } onChange={ e => setEmail(e.target.value) } type="text" placeholder='Email or phone' />
                <input value={ password } onChange={ e => setPassword(e.target.value) } type="password" placeholder='Password' />
            </form>
            <a href="/forget-password">Forget password?</a>
            <div className='button'>
                <button onClick={ loginApp } type='submit'>Sign in</button>
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