import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../assets/home-banner-background.png';
import BannerImage from '../assets/home-banner-image.png';
import {FiArrowRight} from 'react-icons/fi';

function Home(){
    return(
        <div className="home-container">
            <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="Banner background"></img>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your Favourite Food Delivered Hot & Fresh
                    </h1>
                    <p className="primary-text">
                        Our professional chefs do all the prep wor. So you can cook fresh food.
                    </p>
                    <button className="secondary-button">
                        Order now <FiArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;