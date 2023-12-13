import React, { useEffect, useState } from 'react'
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleFirstNameChange = (value) => {
        setFirstName(value);
    };

    const handleLastNameChange = (value) => {
        setLastName(value);
    };

    const handleProceedClick = () => {
        navigate('/create', { state: { firstName, lastName } });
    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isDesktop = windowWidth < 1220;
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
                    <div className="inps">
                        <Input
                            width={isDesktop ? "22rem" : "30rem"} fontsize={isDesktop ? "16px" : ""}
                            name="First Name"
                            onChange={handleFirstNameChange}
                        />
                        <br />
                        <br />
                        <Input
                            width={isDesktop ? "22rem" : "30rem"} fontsize={isDesktop ? "16px" : ""}
                            name="Last Name"
                            onChange={handleLastNameChange}
                        />
                        <br />
                        <br />
                        <Button width={isDesktop ? "22rem" : "30rem"} fontsize={isDesktop ? "16px" : ""} name="Proceed" onClick={handleProceedClick} />
                    </div>
                    <p style={{ color: '#696969', marginTop: '10px' }}>Already have an account&nbsp;? &nbsp;<a style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }} href="#">Login</a></p>
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