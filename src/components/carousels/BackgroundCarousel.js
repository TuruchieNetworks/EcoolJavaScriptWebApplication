import React, { useEffect, useState, useRef } from 'react';
import logo from '../../img/logo.jpg';
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg';
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg';
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg';
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg';
import Biography from '../layout/Bio';
import ImageCarousel from './ImageCarousel';
import useCarouselImages from '../hooks/UseCarouselImages';

// Array of background images
const images = [
  logo,
  pose_brown_gradient,
  pose_gaze_brown,
  smiling_pose_brown,
  solid_pose_kharki
];


const BackgroundCarousel = ({ onBackgroundChange }) => {
  const { idx, changeImage } = useCarouselImages(images);
  //console.log(changeImage);

  return (
    <div className="Carousel"
      style={{
        backgroundImage: `url(${images[idx]})`,
        transition: 'background-image 0.5s ease-in-out',
        width: '100vw',
        height: '100vh', 
        backgroundSize: 'cover', // Ensure the background covers the whole container
        backgroundPosition: 'center', // Position the background image in the center
      }}>
      <div className="background-container">
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
      </div>
    </div>
  )
};

export default BackgroundCarousel;