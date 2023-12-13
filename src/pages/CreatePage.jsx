import React, { useEffect, useState } from 'react'
import './main.css'
import createaccount from '../assets/createaccount.png'
import herologo from '../assets/herologo.png'
import Button from '../components/buttons/Default/Button'
import PasswordInput from '../components/inputs/PasswordInput/PasswordInput'
import GButton from '../components/buttons/GoogleBtn/GButton'
import { useLocation, useNavigate } from 'react-router-dom'
import EmailInput from '../components/inputs/Input/EmailInput'

const CreatePage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { firstName, lastName } = location.state || {};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleEmailChange = (value) => {
        setEmail(value);
    };
   

    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    const handleCreateAccount = () => {
        navigate('/account-setup');
    };
    const values = () => {
        console.log({ firstName, lastName });
    };
    
    values()
    const isButtonDisabled = email.trim() === '' || password.trim() === '';
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
                <img src={createaccount} alt="Hero" />
            </div>
            <div className="hero-right">
                <div className="hero-right-header">
                    <img src={herologo} height={40} alt="" />
                    <ul>
                        <li className='active'>1 : Get Started</li>
                        <li className='create-active'>2 : Create Account</li>
                        <li>3 : Account Setup</li>
                        <li>4 : Payment</li>
                    </ul>
                </div>
                <div className="hero-right-body">
                    <h1>Create Account</h1>
                    <p>Creating account for <span className='name' style={{ color: '#4BA3FF' ,backgroundColor:'transparent' ,fontSize:"16px" }}>@{firstName + lastName}</span></p>
                    <br />
                    <EmailInput width={isDesktop? "20rem" :"30rem"} fontsize={isDesktop?"16px" : ""} name="Email" valid="Provide a valid email" onChange={handleEmailChange} />
                    <br />
                    <PasswordInput width={isDesktop? "20rem" :"30rem"} fontsize={isDesktop?"16px" : ""} onChange={handlePasswordChange} />
                    <br />
                    <Button width={isDesktop? "20rem" :"30rem"} fontsize={isDesktop?"16px" : ""} name="Create Account" onClick={handleCreateAccount} disabled={isButtonDisabled} />
                    <div className="hrr">
                        <hr />&nbsp;<span>Or</span>&nbsp;<hr />
                    </div>
                    <GButton width={isDesktop? "20rem" :"30rem"} fontsize={isDesktop?"16px" : ""} name="Sign up with Google" />
                    <p style={{ color: '#696969' }}>Already have an account&nbsp;? &nbsp;<a style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }} href="#">Login</a></p>
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

export default CreatePage