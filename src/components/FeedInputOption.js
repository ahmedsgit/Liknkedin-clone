import Clap from '@material-ui/icons/Cake';
import Love from '@material-ui/icons/FavoriteOutlined';
import Support from '@material-ui/icons/HealingOutlined';
import Like from '@material-ui/icons/ThumbUpAlt';
import React from 'react';
import '../styles/feedInputOption.css';

function FeedInputOption({title, Icon, color}) {
    return (
        <div className='inputOption'>
            {
                title === 'Like' ? <div className='like-popup'>
                    <Like className='popup-icon' color='primary' />
                    <Clap color='primary' />
                    <Support color='primary' />
                    <Love color='primary' />
                </div> : '' 
            
            }
            
            <Icon style={{ color: color }}/>
            <h4>{ title }</h4>
        </div>
    )
}

export default FeedInputOption;