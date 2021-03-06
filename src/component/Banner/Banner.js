import React from 'react';
import banner from '../../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="banner">
                    <div className="banner-img">
                    <img src={banner} alt="" />
                    </div>
                    <div className="banner-content">
                        <p>EXCLUSIVE OFFER <span>20%</span></p>
                        <h1>Perfect Furniture For You Home.</h1>
                        <p><small>Only this month. Don't miss...</small></p>
                        <h3><span> Start from</span> $650</h3>
                        <button className='btn'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;