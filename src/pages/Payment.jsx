import React from 'react'
import herologo from '../assets/herologo.png'
import CheckButton from '../components/buttons/CheckButton/CheckButton'
const Payment = () => {
    return (
        <div className='payment'>
            <div className="account-header">
                <img src={herologo} height={40} alt="" />
                <ul>
                    <li className='active'>1 : Get Started</li>
                    <li className='create-active'>2 : Create Account</li>
                    <li className='account-active'>3 : Account Setup</li>
                    <li className='payment-active'>4 : Payment</li>
                </ul>
            </div>
            <div className="payment-body">
                <h1>Payment Plan</h1>
                <p>We will customize your experience based on your option.</p>
                <div className="check-button">
                    <CheckButton />
                </div>
                <div className="payment-plans">
                    <div className="payment-card pro"></div>
                    <div className="payment-card active bussiness">
                        <h1>Bussiness</h1>
                    </div>
                    <div className="payment-card enterprise"></div>
                </div>
            </div>
            <div className="account-footer">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>)
}

export default Payment