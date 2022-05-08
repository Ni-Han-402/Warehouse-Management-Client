import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../Shared/Loding/Loding';
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    if(loading){
        return <Loding></Loding>
    }

    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div className="diveder-container">
                <div className='devider'></div>
                <p>Or</p>
                <div className='devider'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn social-btn'><img src={''} alt="" /> GOOGLE LOGIN</button>
        </div>
    );
};

export default SocialLogin;