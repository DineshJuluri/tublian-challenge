import React, { useEffect, useState } from 'react';
import './PaymentModal.css';
import closeImg from '../assets/close.png';
import herologo from '../assets/herologo.png';
import googleicon from '../assets/googleicon.svg';
import Input from '../components/inputs/Input/Input';
import EmailInput from '../components/inputs/Input/EmailInput';
import CardInput from './inputs/Input/CardInput.jsx';
import Button from './buttons/Default/Button.jsx';
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

const PaymentModal = ({ isOpen, onClose }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedOption, setSelectedOption] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const isDesktop = windowWidth < 390;
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handlePay = () => {
        onClose(true);
    };

    const modalStyle = {
        display: isOpen ? 'block' : 'none'
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} style={modalStyle}>
            <div className="modal">
                <div className="header">
                    <img src={herologo} height={20} alt="" />
                    <img style={{ cursor: 'pointer' }} alt="close" width={20} src={closeImg} onClick={onClose} />
                </div>
                <div className="payment-plan">
                    <div className="plan-details">
                        <h4>Mothly Plan</h4>
                        <h6 onClick={onClose}>Change plan</h6>
                    </div>
                    <hr />
                    <div className="plan">
                        <div className="title">
                            <span className="payment-span-pro">Business</span>
                        </div>
                        <div className="price">
                            <p>Total:</p>
                            <div>
                                <span className='currency'>USD</span>
                                <span className="planprice">$49.99</span>
                                <span className="duration">/Month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-info">
                    <div className="payment-method">
                        <h3>Payment Method</h3>
                        <p>Choose how you’d like to pay.</p>
                        <label className="payment-checkbox">
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                            />
                            &nbsp; &nbsp;
                            Credit Card
                        </label>
                        <label className="payment-checkbox">
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                            /> &nbsp; &nbsp;
                            <img src={googleicon} alt="" />Pay
                        </label>
                        <div className="checks">
                        </div>
                    </div>
                    <div className="user-payment-details">
                        <h3>Payment Details</h3>
                        <EmailInput width={isDesktop? "20rem" :"28rem"} fontsize={isDesktop?"16px" : ""} name="Email"  /><br />
                        <Input name="Card Holder" type="text" width={isDesktop? "20rem" :"28rem"} fontsize={isDesktop?"16px" : ""} /><br />
                        <CardInput name="Card Number"  type="number" width={isDesktop? "20rem" :"28rem"} fontsize={isDesktop?"16px" : ""} /><br />
                        <div className="expiry">
                            <Input name="MM-YY" type="number" width={isDesktop? "10rem" :"13rem"} fontsize={isDesktop?"16px" : "15px"} />
                            <Input name="CVC" width={isDesktop? "10rem" :"13rem"} fontsize={isDesktop?"16px" : "15px"} type="number" />
                        </div><br />
                        <Input name="Country" width={isDesktop? "20rem" :"28rem"} fontsize={isDesktop?"16px" : "15px"} type="text"  /><br />
                        <p style={{ fontSize: '12px' }}>By clicking below, you agree to our Terms, Privacy Policy and Automatic Renewal.
                            Tublian will charge you $49.99 (plus Tax) each month until you cancel you
                            subscription in account settings.</p>
                        <br />
                        <Button name="Pay $49.99" width={isDesktop? "20rem" :"28rem"} fontsize={isDesktop?"11px" : "11px"} onClick={handlePay} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
