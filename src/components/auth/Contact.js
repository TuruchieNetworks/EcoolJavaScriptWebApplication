import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ImageCarousel from '../carousels/ImageCarousel';
import HeaderLinks from '../headers/HeaderLinks';
import MusicUtils from '../player/MusicUtils';
import ImageUtils from '../hooks/ImageUtils';
import useCarouselImages from '../hooks/UseCarouselImages';
import UseVideoBackground from '../hooks/UseVideoBackground';

const Contact = () => {
    const musicUtils = new MusicUtils();
    const imageUtilities = new ImageUtils();
    const { videoRef } = UseVideoBackground();
    const videosList = musicUtils.getVideoList();
    const logo_scene = videosList[0].video
    const images = imageUtilities.getAllCarouselImages();
    const { idx, changeImage } = useCarouselImages(images);

    return (
        <div
            id="showcase"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundImage: `url(${images[idx]})`,
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <div className="container showcase-container imageCover">
                <div className='flex-carousel'>
                    <div className='showcase-container'>
                        <ImageCarousel />
                    </div>
                    <div className='carousel-contents'>
                        <p style={{fontSize: '14px'}}>
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
                </div>
                <HeaderLinks />
                <Link to="/music" className="btn party-lights">
                    Read More
                </Link>
            </div>
            
            <div className="video-background">
                <video ref={videoRef} loop muted autoPlay>
                    <source src={logo_scene} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    );
};

export default Contact;