import React, { useState } from 'react';
import './Input.css';
import { PiWarningCircleBold, PiCheckCircleBold } from "react-icons/pi";

const EmailInput = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [showError, setShowError] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

        setInputValue(value);

        if (value === '') {
            setIsValid(true);
            setShowError(false);
        } else if (!pattern.test(value)) {
            setIsValid(false);
            setShowError(true);
        } else {
            setIsValid(true);
            setShowError(false);
        }
        props.onChange(value);
    };

    let hintMessage = null;
    let hintColor = null;
    if (showError) {
        hintMessage = 'Please enter a valid email address';
        hintColor = 'red';
    } else if (inputValue !== '') {
        hintMessage = '';
        hintColor = 'green';
    }

    return (
        <div>
            <div className='Input'>
                <input
                    type='text'
                    placeholder={props.name}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {inputValue && !isValid && <PiWarningCircleBold size={30} color='#F26663' />}
                {inputValue && isValid && <PiCheckCircleBold size={30} color='#76F368' />}
            </div>
            {hintMessage && <p className={hintColor}>{hintMessage}</p>}
        </div>
    );
};

export default EmailInput;
