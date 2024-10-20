import React, { useEffect, useState, useRef } from 'react';
import '../../BackgroundCarousel.css';

// Array of background images
const images = [
  'url(../../img/logo.jpg)',
  'url(../../img/pose_brown_gradient.jpg)',
  'url(../../img/pose_gaze_brown.jpg)',
  'url(../../img/smiling_pose_kharki.jpg)',
  'url(../../img/solid_pose_kharki.jpg)',
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
    <div className="Carousel">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${images[idx]})`,
          transition: 'background-image 0.5s ease-in-out',
          height: '100vh', // Adjust the height as needed
          backgroundSize: 'cover', // Ensure the background covers the whole container
          backgroundPosition: 'center', // Position the background image in the center
        }}
      >

      </div>
    </div>
  )
};

export default BackgroundCarousel;