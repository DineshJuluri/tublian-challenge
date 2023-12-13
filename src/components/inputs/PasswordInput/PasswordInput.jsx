import React, { useState } from 'react';
import { PiCheckCircleBold, PiEyeSlash, PiEyeLight } from 'react-icons/pi';

const PasswordInput = (props) => {
    const [password, setPassword] = useState('');
    const [validations, setValidations] = useState({
        minLength: false,
        uppercase: false,
        symbol: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const styles = {
        PasswordInputContainer: {
            width: props.width || '28rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            backgroundColor: 'transparent',
        },
        PasswordInput: {
            width: props.width ||'30rem',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderBottom: '1px solid #888888',
            paddingBottom: '5px',
        },
        PasswordInputInput: {
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: props.fontsize || '20px',
            fontFamily: 'Space Grotesk',
            fontWeight: '500',
            wordWrap: 'break-word',
            width: '100%',
        },
        PasswordInputInputPlaceholder: {
            color: '#888888',
        },
        ValidationContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'left',
            marginTop: '15px',
        },
        ValidationColumn: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'left',
        },
        ValidationItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        noting: {
            fontSize: '15px',
            fontFamily: 'Space Grotesk',
            fontWeight: '500',
            wordWrap: 'break-word',
            color: '#888888',
            backgroundColor: 'transparent',
        },
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Check validations
        const validationsMet = {
            minLength: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            symbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword),
        };
        setValidations(validationsMet);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={styles.PasswordInputContainer}>
            <div style={styles.PasswordInput}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={styles.PasswordInputInput}
                />
                {showPassword ? (
                    <PiEyeLight color='#888888' onClick={togglePasswordVisibility} size={30} />
                ) : (
                    <PiEyeSlash color='#888888' onClick={togglePasswordVisibility} size={30} />
                )}
            </div>
            <div style={styles.ValidationContainer}>
                <div style={styles.ValidationColumn}>
                    <div style={styles.ValidationItem}>
                        {validations.minLength ? (
                            <PiCheckCircleBold color="#76F368" size={20} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={20} />
                        )}
                        <span style={styles.noting}>&nbsp;8 characters minimum&nbsp;&nbsp;</span>
                    </div>
                    <div style={styles.ValidationItem}>
                        {validations.uppercase ? (
                            <PiCheckCircleBold color="#76F368" size={20} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={20} />
                        )}
                        <span style={styles.noting}>&nbsp;One uppercase</span>
                    </div>
                </div>
                <div style={styles.ValidationColumn}>
                    <div style={styles.ValidationItem}>
                        {validations.symbol ? (
                            <PiCheckCircleBold color="#76F368" size={20} />
                        ) : (
                            <PiCheckCircleBold color="#414141" size={20} />
                        )}
                        <span style={styles.noting}>&nbsp;One symbol</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;
