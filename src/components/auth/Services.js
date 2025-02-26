import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import ImageCarousel from '../carousels/ImageCarousel';
import HeaderLinks from '../headers/HeaderLinks';
import Biography from '../layout/Bio';
import useCarouselImages from '../hooks/UseCarouselImages';
import UseVideoBackground from '../hooks/UseVideoBackground';
import ImageUtils from '../hooks/ImageUtils';
// import MusicUtils from '../player/MusicUtils';
// import BackgroundCarousel from '../carousels/BackgroundCarousel';
// import AudioPlayer from '../player/AudioPlayer';

const Services = ({ currentBackground }) => {
    const imageUtilities = new ImageUtils();
    const images = imageUtilities.getAllCarouselImages();
    const { idx } = useCarouselImages(images);
    const { videoRef } = UseVideoBackground();
    // const musicUtils = new MusicUtils();
    // const videosList = musicUtils.getVideoList();
    // const logo_scene = videosList[0].video

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error attempting to play the video:", error);
            });
        }
    }, []); // Empty dependency array to run once on mount

    return (
        <div className="video-background App"
            id="showcase"
            style={{
                backgroundImage: `url(${images[idx]})`,
                transition: 'background-image 0.5s ease-in-out',
                height: '100vh',
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
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
                <div className='phone-state'>
                <HeaderLinks />
                <Link to="/about" className="btn party-lights">
                    Read More
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
