import { Avatar } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddSharpIcon from '@material-ui/icons/AddSharp'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import React from 'react';
import user from '../images/user/ahmed.jpg';
import coverPic from '../images/user/cover.jpg';
import '../styles/sidebar.css';

function Sidebar() {
    const recentItem = (topic) =>(
        <div className="sidebar-recent-item">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src={coverPic} alt="cover" />
                <Avatar className='sidebar-avatar' src={user}/>
                <h2>Ahmed Sazzad</h2>
                <h4>Born to express not to impress</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed your profile</p>
                    <p className='sidebar-statNumber'>2,232</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views of your post</p>
                    <p className='sidebar-statNumber'>5,432</p>
                </div>
            </div>
            <div className='sidebar-offer'>
                <p>Access exclusive tools &amp; insights</p>
                <div className='sidebar-offer-icon'>
                    <AddBoxIcon color='primary' fontSize='small' />
                    <p>Try Premium for free</p>
                </div>
            </div>
            <div className='sidebar-bookmark'>
                <BookmarkIcon color='action' fontSize='small' />
                <p>My items</p>
            </div>
            <div className="sidebar-features">
                <div className='sidebar-feature'>
                    <p>Groups</p>
                </div>
                <div className='sidebar-feature'>
                    <p>Events</p>
                    <AddSharpIcon className='sidebar-feature-icon' />
                </div>
                <div className='sidebar-feature'>
                    <p>Followerd Hashtag</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p className='title'>Recent</p>
                { recentItem('reactJs')}
                { recentItem('fitebase')}
                { recentItem('programming')}
                { recentItem('webDevelopment')}
                { recentItem('webDesinger')}
            </div>
        </div>
    )
}

export default Sidebar