import React from 'react'
import './Button.css'

const Button = (props) => {
    const { width, name, onClick,color,fontsize } = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const buttonStyle = {
        width: width || '30rem', // Set default width to 'auto' if props.width is not passed
        backgroundColor: color ||'#FDD649', // Set default background color to black   
        fontSize: fontsize||'22px',
    };

    return (
        <button onClick={handleClick} className="button" style={buttonStyle}>
            {name}
        </button>
    );
};

export default Button;
