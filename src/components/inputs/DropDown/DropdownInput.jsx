import React, { useState } from 'react';
import './DropdownInput.css';
import { PiCheckCircleBold  } from 'react-icons/pi';
import { RxCaretDown } from "react-icons/rx";

const DropdownInput = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // Replace with your dropdown options

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest('.DropdownInputContainer')) {
            setIsOpen(false);
        }
    };

    return (
        <div className="DropdownInputContainer" onClick={closeDropdown}>
            <div className="DropdownInput" onClick={toggleDropdown}>
                <div className="SelectedOption">
                    {selectedOption || 'Select an option'}
                </div>
                <RxCaretDown  className="DropdownIcon" color="#888888" size={15} />
            </div>
            <div className={`OptionsContainer${isOpen ? ' show' : ''}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="Option"
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownInput;
