import React from 'react';
import footerLogo from '../../../images/sofa-mart.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container">
            <div className="divider"></div>
            </div>
            <div className='footer'>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-item">
                            <img src={footerLogo} alt="" />
                        </div>
                        <div className="footer-item">
                            <p>What We Do</p>
                            <p>Why Us</p>
                            <p>Our Products</p>
                            <p>Brands We Represent</p>
                            <p>Our Clients</p>
                            <p>Testimonials</p>
                        </div>
                        <div className="footer-item">
                            <p>Sofa, Bed and Tables</p>
                            <p>Offices and Workstations</p>
                            <p>Storage</p>
                            <p>COVID SAFETY</p>
                            <p>Architecture and Design</p>
                            <p>Accessories</p>
                        </div>
                        <div className="footer-item subscrive">
                            <input type="text" placeholder='Subscrive Here' />
                            <button className='btn'>Submit</button>
                        </div>
                    </div>
                    <div className="footer-bootom">
                        <p><small>Copyright &copy; sofa-mart - 2022</small></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;