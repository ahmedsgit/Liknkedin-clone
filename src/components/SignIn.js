import '../styles/signIn.css';

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
                <button type='submit'>Sign in with Google</button>
            </div>
        </div>
    )
}

export default SignIn