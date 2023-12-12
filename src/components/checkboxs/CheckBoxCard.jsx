import React, { useState } from 'react';
import './CheckBoxCard.css';
import tick from '../../assets/tick-circle.png';
import team from '../../assets/team.svg';

const CheckBoxCard = (props) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`CheckBoxCard ${isActive ? 'cardactive' : ''}`} onClick={toggleActive}>
            <div className="checkmark">
                {isActive && <img src={tick} alt="" height={15} />}
            </div>
            <img className='team' src={props.img} height={110} alt="" />
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.desc}</p>
        </div>
    );
};

export default CheckBoxCard;
