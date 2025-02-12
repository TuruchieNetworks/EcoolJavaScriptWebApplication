import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../PlayerAnimations.css';
import About from './About';
import HeaderLinks from '../headers/HeaderLinks';
import Biography from './Bio';
import AudioPlayer from '../player/AudioPlayer';
import PlayerComponent from '../player/PlayerComponent';
import MusicUtils from '../player/MusicUtils';
import UseVideoBackground from '../hooks/UseVideoBackground';
import ImageCarousel from '../carousels/ImageCarousel';
import BackgroundCarousel from '../carousels/BackgroundCarousel';
import MusicBackground from '../backgroundVideos/MusicBackground';
import VideoBackground from '../backgroundVideos/VideoBackground';

const Landing = () => {
    const { videoRef } = UseVideoBackground();
    const musicUtils = new MusicUtils();
    const videosList = musicUtils.getVideoList();
    const logo_scene = videosList[0].video
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
            {/* <div className="video-background">
                <video ref={videoRef} loop muted autoPlay>
                    <source src={logo_scene} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div> */}
            <MusicBackground />
            <VideoBackground />
            <About />
            <BackgroundCarousel />
        </div>
    );
};

export default Landing;