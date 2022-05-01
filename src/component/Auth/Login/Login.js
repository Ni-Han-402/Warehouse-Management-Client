import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate(from, { replace: true });
    }
    const navigateRegister = e => {
        navigate('/register')
    }

    return (
        <div className='container'>
            <h3 className='title'>Login</h3>
            <div className="form">
                <div className="form-container">
                    <form onSubmit={handleLogin} className='form-content'>
                        <input ref={emailRef} type="email" name="email" placeholder='Email Adress' required />
                        <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                        <button className='btn'>LOGIN</button>
                    </form>
                    <div className="form-bottom">
                        <p>Don't Have Any Accout? <span onClick={navigateRegister}>Please Register</span></p>
                        <p>Forget Password? <span>Reset Password</span></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;