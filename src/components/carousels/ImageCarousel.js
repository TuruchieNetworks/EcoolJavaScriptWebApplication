import React, { useEffect, useRef, useState } from 'react';
import '../../ImageCarousel.css'; 
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 
import HeaderTitle from '../layout/HeaderTitle';

const images = [
    logo,
    pose_brown_gradient,
    pose_gaze_brown,
    smiling_pose_brown,
    solid_pose_kharki
];

// object-fit: contain; /* Ensure images cover the area */
const ImageCarousel = () => {
    const [idx, setIdx] = useState(0); // current index of the image
    // const [height, setHeight] = useState(); // current index of the image
    const intervalRef = useRef(null); // to hold the interval reference

    useEffect(() => {
        intervalRef.current = setInterval(run, 2000); // Start the interval

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    const run = () => {
        setIdx((prevIdx) => (prevIdx + 1) % images.length); // Loop back to the start
    };

    const changeImage = (newIdx) => {
        setIdx(newIdx);
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(run, 2000);
    };

    const handleNext = () => {
        changeImage((prevIdx) => (prevIdx + 1) % images.length); // Move to the next image
        resetInterval();
    };

    const handlePrev = () => {
        changeImage((prevIdx) => (prevIdx - 1 + images.length) % images.length); // Move to the previous image
        resetInterval();
    };

    return (
        <div className="Carousel">
            <div
                className="image-container"
                id="imgs"
                style={{ transform: `translateX(${-idx * 100}%)`, transition: 'transform 0.5s ease-in-out'}}
            >
                {images.map((image, index) => (
                    <img 
                        src={image} 
                        alt={`image-${index}`} 
                        key={index}
                        style={{
                            width: '500px', 
                            height: 'auto', 
                            objectFit: index === 0 ? 'contain' : 'cover', // 'contain' for logo, 'cover' for others
                        }}
                    />
                ))}
            </div>
            <HeaderTitle />
            <div className="btn-container">
                <button id="left" className="btn" onClick={handlePrev}>Prev</button>
                <button id="right" className="btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
