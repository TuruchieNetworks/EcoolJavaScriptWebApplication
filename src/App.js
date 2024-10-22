import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import About from './components/layout/About';
import AboutContents from './components/layout/AboutContents';
import AboutLanding from './components/layout/AboutLanding';
import Contact from './components/auth/Contact';
import Services from './components/auth/Services';
import Merchandise from './components/auth/Merchandise';
import MusicBackground from './components/backgroundVideos/MusicBackground';
import LandingBackground from './components/backgroundVideos/LandingBackground';
import BouncingSpheres from './components/physics_graphics/BouncingSpheres';
import PhysicsAnimations from './components/physics_graphics/PhysicsAnimations';
import { LoadedModels } from './components/loaded_models/LoadedModelTextures'; // Import as LoadedModels
import { SpinningBox } from './components/loaded_models/LoadedModelTextures'; // Import SpinningBox separately
import ImageCarousel from './components/carousels/ImageCarousel';
import BackgroundCarousel from './components/carousels/BackgroundCarousel';
import './App.css';

function App() {
  return ( 
    <div style={{height: '100%'}}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Navigate to='/Landing' />} />
        <Route exact path='/Landing' element={ <LandingBackground /> } />
        <Route exact path='/About' element={ <About /> } />
        <Route exact path='/AboutContents' element={ <AboutContents /> } />
        <Route exact path='/AboutLanding' element={ <AboutLanding /> } />
        <Route exact path='/Contact' element={ <Contact /> } />
        <Route exact path='/Services' element={ <Services /> } />
        <Route exact path='/Merchandise' element={ <Merchandise /> } />
        <Route exact path='/LoadedModels' element={ <LoadedModels /> } />
        <Route exact path='/BouncingSpheres' element={ <BouncingSpheres /> } />
        <Route exact path='/PhysicsAnimations' element={ <PhysicsAnimations /> } />
        <Route exact path='/Music' element={ <MusicBackground /> } />
        <Route exact path='/SpinningBox' element={ <SpinningBox /> } />
      </Routes>
    </div>
  );
}

export default App;