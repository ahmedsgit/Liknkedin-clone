import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/headerOption.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function HeaderOption({arrow,avatar,Icon, title}) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption-icon"/>}
            {avatar && (
                <Avatar className='headerOption-icon' src={avatar}/>
            )}
            <h3 className='headerOption-title'>
                { title }
                {arrow && (
                    <ArrowDropDownIcon/>
                )}
            </h3>
        </div>
    );
}

export default HeaderOption;
