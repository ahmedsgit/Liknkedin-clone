import React from 'react'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import '../styles/topic.css';

function Topic({title}) {
    return (
        <div className='topic'>
            <h3>{ title }</h3>
            <div className='button-section'>
                <h6>content topics</h6>
                <div className='button-container'>
                    <button>See All Topics</button>
                    <button>Science and Environment</button>
                    <button>Marketing and Advertising</button>
                    <button>Sales and Retail</button>
                    <button>Technology</button>
                    <button>Finance and Economy</button>
                    <button>Health</button>
                    <button>Business And Management</button>
                </div>
                <a href="/">
                    <span>Show more</span>
                    <ArrowDown/>
                </a>
            </div>
        </div>
    )
}

export default Topic