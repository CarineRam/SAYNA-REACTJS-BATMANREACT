import React from 'react';
import '../styles/forgotPassword.css';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';


function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(null);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(email);
            setEmailSent(true);
            setError(null);
        } catch (error) {
            setEmailSent(false);
            setError(error.message);
        }

    }

    return (
        <div className='passwordReset'>
            <h2>Renouveller mot de passe</h2>
            {emailSent ? (
                <p>An email has been sent to reset your password.</p>
            ) : (
                
                    <form onSubmit={handleResetPassword}>
                        <input
                            className='w-50 emailInput'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type='submit' className='ms-5'>Reset Password</button>
                        {error && <p>{error}</p>}
                    </form>
                
            )}
        </div>
    )
}

export default ForgotPassword