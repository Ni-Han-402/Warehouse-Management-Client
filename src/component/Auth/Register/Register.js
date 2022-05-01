import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateLogin = e =>{
        navigate('/login')
    }

    return (
        <div className='container'>
            <h3 className='title'>Register</h3>
            <div className="form">
                <div className="form-container">
                    <form onSubmit={handleRegister} className='form-content'>
                        <input type="text" name="name" placeholder='Your Name' />
                        <input type="email" name="email" placeholder='Email Adress' required />
                        <input type="password" name="password" placeholder='Password' required />
                        <button className='btn'>REGISTER</button>
                    </form>
                    <div className="form-bottom">
                    <p>Already Have An Accout? <span onClick={navigateLogin}>Please Login</span></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;