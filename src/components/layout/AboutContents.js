import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import ImageCarousel from '../carousels/ImageCarousel';
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 
import AboutLanding from './AboutLanding';
import HeaderLinks from './HeaderLinks';
import useCarouselImages from '../hooks/UseCarouselImages';

// Array of background images
const images = [
    logo,
    pose_brown_gradient,
    pose_gaze_brown,
    smiling_pose_brown,
    solid_pose_kharki,
];

const AboutContents = ({ currentBackground }) => {  
    const videoRef = useRef(null); // Create a reference for the video element

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error attempting to play the video:", error);
            });
        }
    }, []); // Empty dependency array to run once on mount
 
    // Use the custom hook for managing carousel images
    const { idx, changeImage } = useCarouselImages(images);
    console.log(changeImage)

    return (
        <div className="video-background"
            id="showcase"
            style={{
            backgroundImage: `url(${images[idx]})`,
            transition: 'background-image 0.5s ease-in-out',
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
        }}
        ><HeaderLinks />
            <div className="container showcase-container">
                <div className='flex-carousel carousel-contents'>
                    <div><ImageCarousel /></div>
                    <div><AboutLanding /> </div>
                    <div><AboutLanding /> </div> 
                </div>
                {/* */}
            </div>
                <Link to="/about" className="btn party-lights">
                    Read More
                </Link>
        </div>
    );
};

export default AboutContents;
