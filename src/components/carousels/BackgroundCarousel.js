import React, { useEffect, useState, useRef } from 'react';
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 

// Array of background images
const images = [
    logo,
    pose_brown_gradient,
    pose_gaze_brown,
    smiling_pose_brown,
    solid_pose_kharki
];


const BackgroundCarousel = ({ onBackgroundChange }) => {
  const [idx, setIdx] = useState(0); // current index of the image
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

  // const resetInterval = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(run, 2000);
  // };

  // const handleNext = () => {
  //   changeImage((prevIdx) => (prevIdx + 1) % images.length); // Move to the next image
  //   resetInterval();
  // };

  // const handlePrev = () => {
  //   changeImage((prevIdx) => (prevIdx - 1 + images.length) % images.length); // Move to the previous image
  //   resetInterval();
  // };

  return (
    <div className="Carousel"
        style={{
          backgroundImage: `url(${images[idx]})`,
          transition: 'background-image 0.5s ease-in-out',
          width: '100vw', // Adjust the height as needed
          height: '100vh', // Adjust the height as needed
          backgroundSize: 'cover', // Ensure the background covers the whole container
          backgroundPosition: 'center', // Position the background image in the center
        }}>
      <div
        className="background-container">

      </div>
    </div>
  )
};

export default BackgroundCarousel;