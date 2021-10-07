import React from 'react';
import axios from 'axios';
import '../css/Button.css';

const Button = () => {
    const clickBtn1 = async () => {
        console.log("CLicked");
        const response = await axios.get(
          'https://d2828c62-eb78-4052-8143-257d053b1240.mock.pstmn.io/trips/'
        )
        console.log("res: ", response);
    }
    return (
        <>
            <h1>Button Component</h1>
            <div className="btn-wrapper">
                <button className="btn btn1" onClick={clickBtn1}>button 1</button>
                <button className="btn btn2">button 2</button>
                <button className="btn btn3">button 3</button>
            </div>
        </>
    )
}

export default Button;