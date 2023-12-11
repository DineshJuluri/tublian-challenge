import React from 'react'
import './Button.css'

const Button = (props) => {
    const handleClick = () => {
        if (props.onClick) {
          props.onClick();
        }
      };
    return (
            <button onClick={handleClick} className="button">{props.name}</button>
    )
}

export default Button