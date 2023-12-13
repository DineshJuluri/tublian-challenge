import React, { useEffect, useState } from 'react'
import herologo from '../assets/herologo.png'
import CheckBoxCard from '../components/checkboxs/CheckBoxCard'
import img2 from '../assets/img2.png'
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import Button from '../components/buttons/Default/Button'
import { useNavigate } from 'react-router-dom'
const AccountSetup = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleNextClick = () => {
        navigate('/payment');
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
    <div className='account'>
        <div className="account-header">
                <img src={herologo} height={40} alt="" />
                <ul>
                    <li className='active'>1 : Get Started</li>
                    <li className='create-active'>2 : Create Account</li>
                    <li className='account-active'>3 : Account Setup</li>
                    <li>4 : Payment</li>
                </ul>
        </div>
        <div className="account-body">
            <h1>How are you planning to use Tublian?</h1>
            <p>We will customize your experience based on your option.</p>
            <div className="uses">
                <CheckBoxCard img={img1} title="Team Projects" desc="Hire developers for the team projects."/>
                <CheckBoxCard img={img2} title="Personal Projects" desc="Hire developers for personal projects."/>
                <CheckBoxCard img={img3} title="Recruiting" desc="Recruit developers for outstanding companies."/>
            </div>
            <br />
            <br />
            <br />
            <Button width={isDesktop? "20rem" :"30rem"} fontsize={isDesktop?"16px" : ""} name="Next"  onClick={handleNextClick} />
        </div>
        <div className="account-footer">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                </ul>
        </div>
    </div>
  )
}

export default AccountSetup