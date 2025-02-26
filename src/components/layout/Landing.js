import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/PlayerAnimations.css';
import HeaderLinks from '../headers/HeaderLinks';
import Biography from './Bio';
import AudioPlayer from '../player/AudioPlayer';
import ImageCarousel from '../carousels/ImageCarousel';
import BackgroundCarousel from '../carousels/BackgroundCarousel';
import VideoBackground from '../backgroundVideos/VideoBackground';
// import MusicUtils from '../player/MusicUtils';
// import UseVideoBackground from '../hooks/UseVideoBackground';

const Landing = () => {
    // const musicUtils = new MusicUtils();
    // const { videoRef } = UseVideoBackground();
    // const videosList = musicUtils.getVideoList();
    // const logo_scene = videosList[0].video
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
                <div className='phoneBio'>
                    <Biography />
                </div>
                <div className='player-container'>
                    <AudioPlayer />
                </div>
                <div className='phone-state bottom-panels'>
                    <HeaderLinks />
                    <Link to="/about" className="btn party-lights">
                        Read More
                    </Link>
                </div>
            </div>
            {/* <VideoBackground /> */}
            <BackgroundCarousel />
        </div>
    );
};

export default Landing;