import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import HeaderTitle from './HeaderTitle';
import ImageCarousel from '../carousels/ImageCarousel';
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 

const About = ({ currentBackground }) => {  
    const videoRef = useRef(null); // Create a reference for the video element

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error attempting to play the video:", error);
            });
        }
    }, []); // Empty dependency array to run once on mount

    // Array of background images
    const images = [
        logo,
        pose_brown_gradient,
        pose_gaze_brown,
        smiling_pose_brown,
        solid_pose_kharki,
    ];

    const [idx, setIdx] = useState(0); // current index of the image
    const intervalRef = useRef(null); // to hold the interval reference

    useEffect(() => {
        intervalRef.current = setInterval(run, 2000); // Start the interval

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    const run = () => {
        setIdx((prevIdx) => (prevIdx + 1) % images.length); // Loop back to the start
    };

    return (
        <div className="video-background"
            id="showcase"
            style={{
            backgroundImage: `url(${images[idx]})`,
            transition: 'background-image 0.5s ease-in-out',
            // height: '100vh',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
        }}
        ><HeaderTitle />
            <div className="container showcase-container">
                <div className='flex-carousel carousel-contents'>
                    <div><ImageCarousel /></div>
                    <p className='carousel-contents'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.
                    </p>
                </div>
                <Link to="/about" className="btn party-lights"> {/* Updated to use Link */}
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default About;
