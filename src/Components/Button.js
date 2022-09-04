import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className='all-btn'>
            <button className="btn-watch" onClick={props.start}>Start</button>
            <button className="btn-watch" onClick={props.reset}>Reset</button>
            <button className="btn-watch" onClick={props.stop}>Stop</button>

        </div>
    );
};

export default Button;