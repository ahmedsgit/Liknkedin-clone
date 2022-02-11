import React from 'react';
import '../styles/header.css';
import user from '../images/ahmed.jpg';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import ChatIcon  from '@material-ui/icons/Chat';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import NotificationsIcon  from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';


function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <LinkedInIcon style={ { color: '#ff99aa'}} fontSize='large' />
                </div>
                <div className='header-search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className='header-right'>
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={PeopleIcon}/>
                <HeaderOption title="jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="chat" Icon={ChatIcon}/>
                <HeaderOption title="notifications" Icon={NotificationsIcon}/>
                <HeaderOption arrow={ true } avatar = {user} title="me"/>
                <div className='line'/>
                <HeaderOption arrow={ true } title="work" Icon={ViewComfyIcon}/>
                <h6 className='header-text'>Try Premium for free</h6>
            </div>
        </div>
    );
}

export default Header;
