import React, { useEffect, useRef, useState } from 'react';
import '../../ImageCarousel.css'; 
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 
import CarouselButton from './CarouselButton';
import useCarousel from '../hooks/UseCarousel'; 

const images = [
    logo,
    pose_brown_gradient,
    pose_gaze_brown,
    smiling_pose_brown,
    solid_pose_kharki
];

// object-fit: contain; /* Ensure images cover the area */
const ImageCarousel = () => {
    const { idx, handleNext, handlePrev } = useCarousel(images); // Use the custom hook


    return (
    <div>
        <div className="Carousel">
            <div
                className="image-container"
                id="imgs"
                style={{ 
                    transform: `translateX(${-idx * 100}%)`, transition: 'transform 0.5s ease-in-out'}}
            >
                {images.map((image, index) => (
                
                    <img 
                        src={image} 
                        alt={`image-${index}`} 
                        key={index}
                        
                    /> 
                ))}
            </div>
            <div className='btn-container'>
                <CarouselButton direction="left" handleClick={handlePrev} />
                <CarouselButton direction="right" handleClick={handleNext} />
            </div>
        </div>
    </div>
    );
};

export default ImageCarousel;
