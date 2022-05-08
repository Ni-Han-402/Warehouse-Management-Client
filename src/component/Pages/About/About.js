import React from 'react';
import aboutImg from '../../../images/banner2.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="about-content">
                    <h2>Do You Need Help ?</h2>
                    <p>Nihan Zyan</p>
                    <p>1 Mo. Panirkol, Halishahor</p>
                    <p>Chottogram - Bangladesh</p>

                    <div className="about-info">
                        <h5>info@example.com</h5>
                        <h5>+880 295295</h5>
                    </div>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;