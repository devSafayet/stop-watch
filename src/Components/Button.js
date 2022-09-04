import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.start}>Start</button>
            <button className="btn" onClick={props.reset}>Reset</button>
            <button className="btn" onClick={props.stop}>Stop</button>

        </div>
    );
};

export default Button;