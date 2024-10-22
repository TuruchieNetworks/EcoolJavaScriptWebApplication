import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../PlayerAnimations.css';
import HeaderTitle from '../layout/HeaderTitle';
import ImageCarousel from '../carousels/ImageCarousel';
import VideoBackground from '../backgroundVideos/VideoBackground';
import BackgroundCarousel from '../carousels/BackgroundCarousel';
import MusicBackground from '../backgroundVideos/MusicBackground';
import About from './About';

const Landing = () => {
    return (
        <header id="video-background">
            {/* <div className="galaxial-animations"></div> */}
            <div className="container showcase-container imageCover">
                <ImageCarousel />
                <Link to="/about" className="btn party-lights">
                    Read More
                </Link>
            </div>
            <MusicBackground/>
            <About/>
            <BackgroundCarousel />
            {/* <VideoBackground/> */}
        </header>
    );
};

export default Landing;