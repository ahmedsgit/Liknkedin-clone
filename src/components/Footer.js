import { KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import '../styles/footer.css';
import logo from '../images/app/linkedinLogo.png'
import logoBlack from '../images/app/linkedin-black-logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <img src={logo} alt="logo" />
                <div className='links'>
                    <a href="/">General</a>
                    <a href="/">Sign up</a>
                    <a href="/">help center</a>
                    <a href="/">About</a>
                    <a href="/">Press</a>
                    <a href="/">Blog</a>
                    <a href="/">Careers</a>
                    <a href="/">Developers</a>
                </div>
                <div className='links'>
                    <a href="/">Browser Linkedin</a>
                    <a href="/">Learning</a>
                    <a href="/">Jobs</a>
                    <a href="/">Salary</a>
                    <a href="/">mobile</a>
                    <a href="/">services</a>
                    <a href="/">products</a>
                </div>
                <div className='links'>
                    <a href="/">Business solutions</a>
                    <a href="/">talent</a>
                    <a href="/">marketing</a>
                    <a href="/">sales</a>
                    <a href="/">learning</a>
                </div>
                <div className='links'>
                    <a href="/">directories</a>
                    <a href="/">members</a>
                    <a href="/">jobs</a>
                    <a href="/">companies</a>
                    <a href="/">salaries</a>
                    <a href="/">featured</a>
                    <a href="/">learning</a>
                    <a href="/">posts</a>
                    <a href="/">articles</a>
                    <a href="/">schols</a>
                    <a href="/">news</a>
                    <a href="/">news letters</a>
                    <a href="/">services</a>
                    <a href="/">interview prep</a>
                    <a href="/">products</a>
                    <a href="/">content topics</a>
                </div>
            </div>
            <div className='bottom'>
                <a href="/">
                    <img src={logoBlack} alt='logo'/>
                </a>
                    <p>&copy; 2022</p>
                    <a href="/">About</a>
                    <a href="/">Accessibilities</a>
                    <a href="/">user agremnent</a>
                    <a href="/">privacy policy</a>
                    <a href="/">cookie policy</a>
                    <a href="/">copyright policy</a>
                    <a href="/">brand policy</a>
                    <a href="/">guest control</a>
                    <a href="/">community guideline</a>
                    <a href="/">
                        <span>Language</span>
                        <KeyboardArrowDown fontSize='small'/>
                    </a>
            </div>
        </div>
    )
}

export default Footer