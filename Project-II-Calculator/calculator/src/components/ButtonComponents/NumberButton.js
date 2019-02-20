import React from 'react';
import './Button.css';

const NumberButton = () => {
    return  (
    <div className="calc-buttons">
    <div className="clear-btn"></div>
        <div className="number-buttons">
             <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
        <div className="zero-btn"></div>
    </div>
    );
};

export default NumberButton;
