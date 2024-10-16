import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../assets/home-banner-background.png';
import BannerImage from '../assets/home-banner-image.png';
import {FiaArrowRight} from 'react-icons/fi';

function Home(){
    return(
        <div className="home-container">
            <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src="" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Home;