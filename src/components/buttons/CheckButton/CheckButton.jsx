import React, { useState } from 'react';
import './CheckButton.css';

const CheckButton = () => {
    const [isActiveMonthly, setIsActiveMonthly] = useState(true);

    const handleMonthlyClick = () => {
        setIsActiveMonthly(true);
    };

    const handleAnnualClick = () => {
        setIsActiveMonthly(false);
    };

    return (
        <div className='CheckButton'>
            <button className={isActiveMonthly ? 'active' : ''} onClick={handleMonthlyClick}>Monthly</button>
            <button className={!isActiveMonthly ? 'active' : ''} onClick={handleAnnualClick}>Annually <span>20% off</span></button>
        </div>
    );
};

export default CheckButton;
