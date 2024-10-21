import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../PlayerAnimations.css';
import HeaderTitle from '../layout/HeaderTitle';
import ImageCarousel from '../carousels/ImageCarousel';
import VideoBackground from '../backgroundVideos/VideoBackground';
import AboutContents from '../layout/AboutContents';

const Landing = () => {
    return (
        <header id="showcase">
            {/* <div className="galaxial-animations"></div> */}
            <div className="container showcase-container imageCover">
                <HeaderTitle />
                <ImageCarousel />
                <Link to="/about" className="btn party-lights">
                    Read More
                </Link>
            </div>
            <AboutContents/>
            <VideoBackground/>
        </header>
    );
};

export default Landing;