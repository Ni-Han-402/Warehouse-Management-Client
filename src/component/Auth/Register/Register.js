import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/home')
    }

    const navigateLogin = e => {
        navigate('/login')
    }

    return (
        <div className='container'>
            <h3 className='title'>Register</h3>
            <div className="form">
                <div className="form-container">
                    <form onSubmit={handleRegister} className='form-content'>
                        <input ref={nameRef} type="text" name="name" placeholder='Your Name' />
                        <input ref={emailRef} type="email" name="email" placeholder='Email Adress' required />
                        <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
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