import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import About from './components/layout/About';
import AboutContents from './components/layout/AboutContents';
import Landing from './components/layout/Landing';
import Contact from './components/auth/Contact';
import Music from './components/auth/Music';
import Services from './components/auth/Services';
import Merchandise from './components/auth/Merchandise';
import MusicBackground from './components/backgroundVideos/MusicBackground';
import VideoBackground from './components/backgroundVideos/VideoBackground';
import LandingBackground from './components/backgroundVideos/LandingBackground';
import BouncingSpheres from './components/physics_graphics/BouncingSpheres';
import PhysicsAnimations from './components/physics_graphics/PhysicsAnimations';
import { LoadedModels } from './components/loaded_models/LoadedModelTextures'; // Import as LoadedModels
import { SpinningBox } from './components/loaded_models/LoadedModelTextures'; // Import SpinningBox separately
import ImageCarousel from './components/carousels/ImageCarousel';
import BackgroundCarousel from './components/carousels/BackgroundCarousel';
import logo from './logo.svg';
import './App.css';
import BackgroundSlider from './components/carousels/BackgroundSlider';


function App() {
  // Array of background images
  const images = [
    'url(../../img/logo.jpg)',
    'url(../../img/pose_brown_gradient.jpg)',
    'url(../../img/pose_gaze_brown.jpg)',
    'url(../../img/smiling_pose_kharki.jpg)',
    'url(../../img/solid_pose_kharki.jpg)',
  ];

  const [currentBackground, setCurrentBackground] = useState('');  
  // Function to receive background updates from BackgroundCarousel
  const handleBackgroundChange = (newBackground) => {
      setCurrentBackground(newBackground);
  };
  return ( 
    <div style={{height: '100%'}}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Navigate to='/Landing' />} />
        <Route exact path='/Landing' element={ <LandingBackground /> } />
        <Route exact path='/About' element={ <About handleBackgroundChange={handleBackgroundChange} /> } />
        <Route exact path='/AboutContents' element={ <AboutContents handleBackgroundChange={handleBackgroundChange} /> } />
        <Route exact path='/Contact' element={ <Contact /> } />
        <Route exact path='/Services' element={ <Services /> } />
        <Route exact path='/Merchandise' element={ <Merchandise /> } />
        <Route exact path='/ImageCarousel' element={ <ImageCarousel /> } />
        <Route exact path='/BackgroundCarousel' element={ <BackgroundCarousel /> } />
        <Route exact path='/LoadedModels' element={ <LoadedModels /> } />
        <Route exact path='/BouncingSpheres' element={ <BouncingSpheres /> } />
        <Route exact path='/PhysicsAnimations' element={ <PhysicsAnimations /> } />
        <Route exact path='/Music' element={ <MusicBackground /> } />
        <Route exact path='/Music' element={ <BackgroundSlider /> } />
        <Route exact path='/VideoBackground' element={ <LandingBackground /> } />
        <Route exact path='/VideoBackground' element={ <VideoBackground /> } />
        <Route exact path='/SpinningBox' element={ <SpinningBox /> } />
      </Routes>
    </div>
  );
}

export default App;