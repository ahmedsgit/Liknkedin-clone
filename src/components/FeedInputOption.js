import React from 'react'
import '../styles/feedInputOption.css';

function FeedInputOption({title, Icon, color}) {
    return (
        <div className='inputOption'>
            <Icon style={{ color: color }}/>
            <h4>{ title }</h4>
        </div>
    )
}

export default FeedInputOption;