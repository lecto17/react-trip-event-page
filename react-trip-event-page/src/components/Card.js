import React from 'react';
import '../css/Card.css';

const Card = () => {
    return (
        <>
            <h1>Card Component</h1>
            <div className="card-wrapper">
                <div className="card card-section1">card 1</div>
                <div className="card card-section2">card 2</div>
                <div className="card card-section3">card 3</div>
            </div>
        </>
    )
}

export default Card;