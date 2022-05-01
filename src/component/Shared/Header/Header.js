import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/sofa-mart-logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <>
            <div className="header">
                <div className="top-nav">
                    <p><small>Need help? Call Us: + 880 295295
                    </small></p>
                </div>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="bottom-nav">
                        <div className="categories">
                            <p>All Categories</p>
                        </div>
                        <div className="menu-bar">
                            <Link className='menu' to={'/home'}>Home</Link>
                            <Link className='menu' to={'/inventory'}>Inventory</Link>
                            <Link className='menu' to={'/blog'}>Blog</Link>
                            <Link className='menu' to={'/about'}>About</Link>
                        </div>
                        <div className="login">
                            {
                                user ?
                                <button onClick={handleLogout} className='btn'>Logout</button>
                                :
                                <Link className='menu btn' to={'/login'}>Login</Link>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;