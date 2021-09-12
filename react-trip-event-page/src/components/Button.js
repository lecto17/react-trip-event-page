import React from 'react';
import '../css/Button.css';

const Button = () => {
    return (
        <>
            <h1>Button Component</h1>
            <div className="btn-wrapper">
                <button className="btn btn1">button 1</button>
                <button className="btn btn2">button 2</button>
                <button className="btn btn3">button 3</button>
            </div>
        </>
    )
}

export default Button;