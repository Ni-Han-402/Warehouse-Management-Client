import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/sofa-mart-logo.png'
import './Header.css'

const Header = () => {
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
                            <Link className='menu login-menu' to={'/login'}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;