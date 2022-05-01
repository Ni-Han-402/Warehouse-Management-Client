import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <h3 className='title'>Login</h3>
            <div className="form">
                <div className="form-container">
                    <form className='form-content'>
                        <input type="email" name="email" placeholder='Email Adress' required />
                        <input type="password" name="password" placeholder='Password' required />
                        <button className='btn'>LOGIN</button>
                    </form>
                    <div className="form-bottom">
                        <p>Don't Have Any Accout? <span>Please Register</span></p>
                        <p>Forget Password? <span>Reset Password</span></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;