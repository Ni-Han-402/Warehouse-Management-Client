import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/sofa-mart-logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <>
            <div className="header">
                <div className="top-nav">
                    <p><small>Need help? Call Us: + 880 295295
                    </small></p>
                </div>
                <div className="header-nav">
                    <div className="container">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <ul className="bottom-nav">
                            <li>
                                <div className="categories">
                                    <p>All Categories</p>
                                </div>
                            </li>

                            <li>
                                <ul className="menu-bar">
                                    <Link className='menu' to={'/home'}><li>Home</li></Link>
                                    <Link className='menu' to={'/blog'}><li>Blog</li></Link>
                                    <Link className='menu' to={'/about'}><li>About</li></Link>
                                    {
                                        user && <>
                                            <Link className='menu' to={'/manageitem'}><li>Manage</li></Link>
                                            <Link className='menu' to={'/additem'}><li>Add</li></Link>
                                            <Link className='menu' to={'/myitem'}><li>My Item</li></Link>
                                        </>
                                    }
                                </ul>
                            </li>

                            <li>
                                <div className="login">
                                    {
                                        user ?
                                            <button onClick={handleLogout} className='btn'>Logout</button>
                                            :
                                            <Link className='menu btn' to={'/login'}>Login</Link>
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;