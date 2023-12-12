import React, { useState } from 'react'
import './main.css'
import hero from '../assets/hero.png'
import herologo from '../assets/herologo.png'
import Input from '../components/inputs/Input/Input'
import Button from '../components/buttons/Default/Button'
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleFirstNameChange = (value) => {
      setFirstName(value);
    };
  
    const handleLastNameChange = (value) => {
      setLastName(value);
    };
  
    const handleProceedClick = () => {
        navigate('/create', { state: { firstName, lastName } });
    };
  return (
    <div className='hero'>
        <div className="hero-left">
            <img src={hero} alt="Hero" />
        </div>
        <div className="hero-right">
            <div className="hero-right-header">
                <img src={herologo} height={40} alt="" />
                <ul>
                    <li className='active'>1 : Get Started</li>
                    <li>2 : Create Account</li>
                    <li>3 : Account Setup</li>
                    <li>4 : Payment</li>
                </ul>
            </div>
            <div className="hero-right-body">
                <h1>Get Started</h1>
                <p>Start recruiting streetcred developers, Today!!</p>
                <br />
                <br />
                <Input name="First Name" onChange={handleFirstNameChange} />
                <br />
                <br />
                <Input name="Last Name" onChange={handleLastNameChange} />
                <br />
                <br />
                <Button name="Proceed" onClick={handleProceedClick}/>
                <p style={{color: '#696969'}}>Already have an account&nbsp;? &nbsp;<a style={{color: 'white',textDecoration: 'underline', cursor: 'pointer'}} href="#">Login</a></p>
            </div>
            <div className="hero-right-footer">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero