import React, { useRef, useEffect,useState } from 'react';
import logo_scene from '../../videos/logo_scene.mp4';
import '../../VideoBackground.css';
import Music from '../auth/Music';
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 

const MusicBackground = () => {
    const [idx, setIdx] = useState(0); // current index of the image
    const intervalRef = useRef(null); // to hold the interval reference
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

    useEffect(() => {
        intervalRef.current = setInterval(run, 2000); // Start the interval

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    const run = () => {
        setIdx((prevIdx) => (prevIdx + 1) % images.length); // Loop back to the start
    };

    return (
        <div className="full-video-backgroun"
            id="showcase"
            style={{
                backgroundImage: `url(${images[idx]})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
                // width: '100vw',
                // height: '100vh',
            }}
        >
            <video ref={videoRef} loop muted autoPlay style={{display: 'none'}}>
                <source src={logo_scene} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <Music/>
        </div>
    );
};

export default MusicBackground;
