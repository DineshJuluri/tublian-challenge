import React from 'react';
import googleicon from '../../../assets/googleicon.svg';


const GButton = (props) => {
  const styles = {
    GButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontSize: props.fontsize ||  '22px',
        fontFamily: 'Space Grotesk',
        fontWeight: '400',
        textAlign: 'center',
        wordWrap: 'break-word',
        cursor: 'pointer',
        width:props.width|| '30rem',
        padding: '0.5rem',
        border: '1px solid #EA4335',
        backgroundImage: 'linear-gradient(black, black) padding-box, linear-gradient(to right, #FBDA61, #FF5ACD) border-box',
        borderRadius: '50em',
        transition: 'background-image 0.3s ease-in-out',
    },
    GButtonHover: {
        backgroundImage: 'linear-gradient(to right, #FBDA61, #FF5ACD)',
        transition: 'all 0.3s ease-in-out',
    },
};

    const isContactUs = props.name && props.name.toLowerCase() === 'contact us';

    return (
        <button className='GButton' style={isContactUs ? {} : styles.GButton} onMouseEnter={() => isContactUs ? null : event.target.style = styles.GButtonHover} onMouseLeave={() => event.target.style = {}}>
            {!isContactUs && <img src={googleicon} alt="googleicon" height={20} />}
            &nbsp;
            {props.name}
        </button>
    )
}

export default GButton;
