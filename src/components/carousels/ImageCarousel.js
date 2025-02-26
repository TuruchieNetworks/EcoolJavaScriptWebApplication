import React, { useEffect, useRef, useState } from 'react';
import '../../styles/ImageCarousel.css';
import CarouselButton from './CarouselButton';
import useCarousel from '../hooks/UseCarousel';
import ImageUtils from '../hooks/ImageUtils';

// object-fit: contain; /* Ensure images cover the area */
const ImageCarousel = () => {
    const imageUtilities = new ImageUtils();
    const images = imageUtilities.getAllCarouselImages();
    const { idx, handleNext, handlePrev } = useCarousel(images); // Use the custom hook


    return (
        <div className="Carousel">
            <div
                className="image-container"
                id="imgs"
                style={{
                    transform: `translateX(${-idx * 100}%)`, transition: 'transform 0.5s ease-in-out'
                }}
            >
                {images.map((image, idx) => (
                    <div>
                        <img
                            src={image}
                            alt={`image-${idx}`}
                            key={idx}
                        />
                    </div>
                ))}
            </div>
            <div className='btn-container'>
                <CarouselButton direction="left" handleClick={handlePrev} />
                <CarouselButton direction="right" handleClick={handleNext} />
            </div>
        </div>
    );
};

export default ImageCarousel;
