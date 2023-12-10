import React from 'react'
import './main.css'
import createaccount from '../assets/createaccount.png'
import herologo from '../assets/herologo.png'
import Input from '../components/inputs/Input/Input'
import Button from '../components/buttons/Default/Button'
import PasswordInput from '../components/inputs/PasswordInput/PasswordInput'
import GButton from '../components/buttons/GoogleBtn/GButton'

const CreatePage = (props) => {
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
                <p>Creating account for <span style={{color: '#4BA3FF'}}>@{props.name}</span></p>
                <br />
                <br />
                <Input name="Email"/>
                <br />
                <br />
                <PasswordInput/>
                <br />
                <br />
                <Button name="Create Account"/>
                <div className="hrr">
                    <hr />&nbsp;<span>Or</span>&nbsp;<hr />
                </div>
                <GButton name="Sign up with Google"/>
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

export default CreatePage