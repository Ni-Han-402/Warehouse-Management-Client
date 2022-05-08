import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../Shared/Loding/Loding';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;

    if (error) {
        errorElement = <p>Error: {error.message}</p>
    }

    if (loading || sending) {
        return <Loding></Loding>
    }
    let from = location.state?.from?.pathname || "/";

    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://radiant-refuge-45393.herokuapp.com/login', {email})
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegister = e => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent Email');
        }
        else{
            toast('Please Enter Your Email')
        }
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
                        {errorElement}
                    </form>
                    <div className="form-bottom">
                        <p>Don't Have Any Accout? <span onClick={navigateRegister}>Please Register</span></p>
                        <p>Forget Password? <span onClick={resetPassword}>Reset Password</span></p>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;