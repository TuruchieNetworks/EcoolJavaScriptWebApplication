import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../PlayerAnimations.css';
import ImageCarousel from '../carousels/ImageCarousel';
import BackgroundCarousel from '../carousels/BackgroundCarousel';
import MusicBackground from '../backgroundVideos/MusicBackground';
import About from './About';
import HeaderLinks from '../headers/HeaderLinks';
import Biography from './Bio';
import AudioPlayer from '../player/AudioPlayer';
import PlayerComponent from '../player/PlayerComponent';

const Landing = () => {
    return (
        <div id="showcase">
            <div className="container showcase-container imageCover">
                <div className='flex-carousel'>
                    <div className='showcase-container'>
                        <ImageCarousel />
                    </div>
                    <div className='pcBio'>
                        <Biography />
                    </div>
                </div>
                <div className='player-container'>
                    <AudioPlayer />
                </div>
                <div className='phoneBio'>
                    <Biography />
                </div>
                <div className='phone-state bottom-panels'>
                    <HeaderLinks />
                    <Link to="/about" className="btn party-lights">
                        Read More
                    </Link>
                </div>
            </div>
            <MusicBackground />
            <About />
            <BackgroundCarousel />
            {/* <VideoBackground/> */}
        </div>
    );
};

export default Landing;