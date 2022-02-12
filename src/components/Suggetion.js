import React from 'react';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import '../styles/suggestion.css';

function Suggestion({ title }) {
    return (
        <div className='suggestion'>
            <h3>{ title }</h3>
            <div className='button-section'>
                <h6>suggested search</h6>
                <div className='button-container'>
                    <button>Engineering</button>
                    <button>Business Development</button>
                    <button>Finance</button>
                    <button>Administrative Assistant</button>
                    <button>Retail Associate</button>
                    <button>Customer Service</button>
                    <button>Operations</button>
                    <button>Information Technology</button>
                    <button>Marketing</button>
                    <button>Human Resource</button>
                </div>
                <a href="/">
                    <span>Show more</span>
                    <ArrowDown />
                </a>
            </div>
        </div>
    );
}

export default Suggestion;