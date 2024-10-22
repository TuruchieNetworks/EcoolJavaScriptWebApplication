import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../PlayerAnimations.css';
import ImageCarousel from '../carousels/ImageCarousel';
import BackgroundCarousel from '../carousels/BackgroundCarousel';
import MusicBackground from '../backgroundVideos/MusicBackground';
import About from './About';
import HeaderLinks from './HeaderLinks';

const Landing = () => {
    return (
        <div id="showcase">
            {/* <div className="galaxial-animations"></div> */}
            <div className="container showcase-container imageCover">
                <ImageCarousel />
                <HeaderLinks />
                <Link to="/about" className="btn party-lights">
                    Read More
                </Link>
            </div>
            <MusicBackground/>
            <About/>
            <BackgroundCarousel />
            {/* <VideoBackground/> */}
        </div>
    );
};

export default Landing;