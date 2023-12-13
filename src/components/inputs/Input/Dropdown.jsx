import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownStyles = {
        mainContainer: {
            backgroundColor: '#292929',
            position: 'relative',
        },
        trigger: {
            cursor: 'pointer',
            border: '1px solid #888888',
            padding: '8px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
            backgroundColor: '#292929',
        },
        arrowIcon: {
            marginLeft: '8px',
        },
        dropdownMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#292929',
            zIndex: 999,
            width: '100%',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            border: '1px solid #888888',
        },
        dropdownOption: {
            padding: '8px',
            backgroundColor: '#292929',
            cursor: 'pointer',
            borderBottom: '1px solid #ccc',
        },
        lastOption: {
            borderBottom: 'none',
        },
    };

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div style={dropdownStyles.mainContainer}>
            <div onClick={() => setIsOpen(!isOpen)} style={dropdownStyles.trigger}>
                <p>Select an option</p>
                <span style={dropdownStyles.arrowIcon}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div style={dropdownStyles.dropdownMenu}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            style={{
                                ...dropdownStyles.dropdownOption,
                                ...(index === options.length - 1 && dropdownStyles.lastOption),
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
