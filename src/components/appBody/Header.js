/* eslint-disable jsx-a11y/anchor-is-valid */
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PlusIcon from '@material-ui/icons/AddBoxRounded';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import styled from 'styled-components';
import DownIcon from '../../images/down-icon.svg';
import HomeIcon from '../../images/nav-home.svg';
import JobsIcon from '../../images/nav-jobs.svg';
import MessagingIcon from '../../images/nav-messaging.svg';
import NetworkIcon from '../../images/nav-network.svg';
import NotificationsIcon from '../../images/nav-notifications.svg';
import WorkIcon from '../../images/nav-work.svg';
import UserIcon from '../../images/user.svg';

function Header() {

    const [popup, setPopup] = useState(false);
    console.log(popup);
    return (
        <Container>
            <Content>
                <Logo>
                    <a className='linkedin' href="/">
                        <LinkedInIcon className="icon"/>
                    </a>
                    <a className='profile' href="/">
                        <img src={UserIcon} alt="user icon" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder='Search ' />
                        <SearchIcon className='icon'/>
                    </div>
                </Search>
                <NavList className="message-mobile">
                    <a href="/">
                        <img src={ MessagingIcon } alt="homeicon" />
                    </a>
                </NavList>
                <Nav>
                    <NavListWrap>
                        <NavList className='active'>
                            <a href="/">
                                <img src={ HomeIcon } alt="homeicon" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/">
                                <img src={ NetworkIcon } alt="homeicon" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList className="post">
                            <a href="/">
                                <PlusIcon className="plus-icon"/>
                                <span>post</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/">
                                <img src={ JobsIcon } alt="homeicon" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList className="message">
                            <a href="/">
                                <img src={ MessagingIcon } alt="homeicon" />
                                <span>messeging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/">
                                <img src={ NotificationsIcon } alt="homeicon" />
                                <span>notification</span>
                            </a>
                        </NavList>
                        <User onClick={ () => setPopup(!popup) }>
                            <a>
                                <img src={ UserIcon } alt="user icon"/>
                                <span>
                                    <span>me</span>
                                    <img src={ DownIcon } alt="down icon" />
                                </span>
                            </a>
                            <UserPopup className={ `${popup ? "profile-popup-active" : ""}`}>
                                <Profile>
                                    <div>
                                        <img src={ UserIcon } alt="User icon" />
                                        <span>
                                            <h3>Ahmed Sazzad</h3>
                                            <p>Full-Stack Web Developer</p>
                                        </span>
                                    </div>
                                    <button>View Profile</button>
                                </Profile>
                                <Menu>
                                    <a className='link' href="/account">account</a>
                                    <a className='link' href="/settings">settings &amp; privacy</a>
                                    <a className='link' href="/help">help</a>
                                    <a className='link' href="/language">language</a>
                                </Menu>
                                <Menu>
                                    <a className='link' href="/account">manage</a>
                                    <a className='link' href="/settings">posts &amp; activity</a>
                                    <a className='link' href="/help">job posting account</a>
                                </Menu>
                                <SignOut>
                                    <a className="signOut" href="/">Sign out</a>
                                </SignOut>
                            </UserPopup>
                        </User>
                        <Work>
                            <a href="/work">
                                <img src={ WorkIcon } alt="user icon"/>
                                <span>
                                    <span>work</span>
                                    <img src={ DownIcon } alt="down icon" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}



const Container = styled.div`
    position: fixed;
    background-color: #fff;
    border-bottom: 1px solid rgba( 0, 0, 0, 0.08 );
    left: 0;
    top: 0;
    padding: 0 24px;
    width: 100vw;
    z-index: 100;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
    & > .message-mobile{
        display: none;
    }

    @media (max-width: 768px) {
        .message-mobile{
            display: block;
            margin-right: 30px;
        }
    }
`;

// User Popup Window
const UserPopup = styled.div`
    display: none;
    position: absolute;
    top: 45px;
    background-color: #fff;
    height: 400px;
    width: 270px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    margin-left: -210px;
    margin-top: 10px;
    border-radius: 7px 0px 7px 7px;
    > * {
        &:nth-child(2) {
            margin-top: 10px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        &:nth-child(3) {
            margin-top: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
    }

    &.profile-popup-active{
        display:block;
    }
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        margin-left:-50px;
        img { 
            margin-right: 5px;
            height: 50px;
            border-radius: 50%;
        }
        span {
            h3{
                color: rgba(0, 0, 0, 0.8);
                font-size: 17px;
            }
            p {
                font-size: 13px;
                color: rgba(0, 0, 0, 0.7);
            }
        }
    }
    button{
        cursor:pointer;
        width: 80%;
        border: 1px solid #ff8095;
        border-radius: 10px;
        padding: 3px;
        background-color: transparent;
        color: #ff8095;
    }

    & > button:hover{
        background-color: rgba(255, 128, 149, 0.1);
        color: #ff4d6a;
    }
    & > button:active{
        transform: scale(0.98);
    }
`;
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    > *{
        &:first-child {
            color: rgba(0, 0, 0, 0.8);
            font-weight: 600;
        }
    }

    .link {
        margin: -3px 0;
        padding-left: 5px;
        display:flex;
        flex-direction: column;
        align-items:flex-start;
        font-size: 15px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.7);

        &:hover{
            text-decoration: underline;
        }
    }
`;
const SignOut = styled.div`
        margin-top: 5px;
        border-radius: 7px;
        .signOut {
            margin: -3px 0;
            padding-left: 5px;
            display: flex;
            align-items: flex-start;
            font-size: 14px;
            text-decoration: none;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 600;

            &:hover{
                background: rgba(255, 128, 149, 0.1);
            }
            &:active{
                transform: scale(0.97);
                border: 1px solid #ff8095;
            }
        }

`;

const Logo = styled.span`
    margin-right: 8px;
    & .icon{
        font-size: 45px;
        color: #ff8095;
    }

    & > .profile {
        display: none;
        & > img{
            height: 45px;
            border-radius: 50%;
        } 
    }
    @media (max-width: 768px) {
        & > .profile{
            display: block;
        }
        & > .linkedin{
            display: none;
        }
    }
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div{
        max-width: 280px;
        input {
            border:none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba( 0, 0, 0, 0.9 );
            width: 218px;
            padding: 0 8px  0 40px;
            line-height: 1.75px;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }

        & .icon {
            font-size: 20px;
            width: 40px;
            position: absolute;
            z-index: 1;
            top: 8px;
            left: 6px;
            border-radius: 0 2px 2px 0;
            margin: 0;
            pointer-events: none;
        }
        @media (max-width: 768px) {
            input {
                width: 307px;
            }
        }
    }
`;

const Nav =styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
        margin-bottom: 1px;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    .active {
        span:after {
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            width:100%;
            transition: transform 0.2s ease-in-out;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }

    .post{
            display:none;
            margin-bottom: -3px;
            & .plus-icon{
                color: rgba(0, 0, 0, 0.6);
            }
        }
    @media (max-width: 768px) {
        display: flex;
        align-items:center;
        justify-content: space-evenly;
        margin: 0 40px 0 0;
        .active {
            span:after {
                border-top: 2px solid var(--white, #fff);
                margin-bottom: 45px;
            }
        }
        .message{
            display:none;
        }
        .post{
            display:block;
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a {
        background: transparent;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span {
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            text-transform: capitalize;
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }
    &:hover, &:active {
        a {
            span{
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`;


const User = styled(NavList)`
    cursor: pointer;
    a > img {
        width: 24px;
        height:24px;
        border-radius: 50%;
    }

    a > span{
        display: flex;
        align-items: center;
    }

    /* &:hover {
        ${UserPopup} {
            display: block;
        }
    } */
    @media (max-width: 768px) {
        display: none;
    }
    
`;
const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;


export default Header;