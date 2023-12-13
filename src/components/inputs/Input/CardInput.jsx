import React, { useState } from 'react';
// import './Input.css';
import { PiWarningCircleBold, PiCheckCircleBold } from "react-icons/pi";

const Input = (props) => {
    const inputStyles = {
        Input: {
            width : props.width || '30rem',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderBottom: '1px solid #888888',
            paddingBottom: '5px',
        },
        input: {
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: props.fontsize||'20px',
            fontFamily: 'Space Grotesk',
            fontWeight: '500',
            wordWrap: 'break-word',
            width: '100%',
        },
        placeholder: {
            color: '#888888',
        },
        red: {
            color: '#F26663',
            fontSize: '13px',
            fontFamily: 'Space Grotesk',
            fontWeight: '500',
            wordWrap: 'break-word',
            marginTop: '3px',
        },
        green: {
            color: '#888888',
            fontSize: '13px',
            fontFamily: 'Space Grotesk',
            fontWeight: '500',
            wordWrap: 'break-word',
            marginTop: '3px',
        },
    };
    
    const [isValid, setIsValid] = useState(true);
    const [showError, setShowError] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.trim();

        // Remove non-numeric characters and check if the remaining length is 16
        const numericValue = value.replace(/\D/g, '');
        const isValidInput = numericValue.length === 16 || numericValue === '';

        setInputValue(value);

        if (isValidInput) {
            setIsValid(true);
            setShowError(false);
            props.onChange(numericValue); // Send only numeric value to parent
        } else {
            setIsValid(false);
            setShowError(true);
        }
    };

    let hintMessage = null;
    let hintColor = null;
    if (showError) {
        hintMessage = 'Enter a valid Card Number';
        hintColor = 'red';
    } else if (inputValue !== '') {
        hintMessage = '';
        hintColor = 'green';
    }

    return (
        <div>
            <div className='Input' style={inputStyles.Input}>
                <input
                    type={props.type}
                    placeholder={props.name}
                    value={inputValue}
                    onChange={handleInputChange}
                    style={inputStyles.input}
                />
                {inputValue && !isValid && <PiWarningCircleBold size={30} color='#F26663' />}
                {inputValue && isValid && <PiCheckCircleBold size={30} color='#76F368' />}
            </div>
            {hintMessage && <p style={inputStyles[hintColor]} className={hintColor}>{hintMessage}</p>}
        </div>
    );
};

export default Input;