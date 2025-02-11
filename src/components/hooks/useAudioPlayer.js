import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import MusicUtils from '../player/MusicUtils';
import useUIUtils from './useUIUtils';
import useTrackInfo from './useTrackInfo';
import useUIEvents from './useUIEvents';

const useAudioPlayer = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playPauseBtn, setPlayPauseBtn] = useState('▶');
  const [seekSlider, setSeekSlider] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [volumeSlider, setVolumeSlider] = useState(100);
  const [currentTime, setCurrentTime] = useState('00.00');
  const [totalDuration, setTotalDuration] = useState('00.00');
  const [remainingDuration, setRemainingDuration] = useState('00.00');
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [updateTimer, setUpdateTimer] = useState(0);
  const [updateInterval, setUpdateInterval] = useState(0);
  const [wave, setWave] = useState('wave');
  const [randomIcon, setRandomIcon] = useState('fa-random');
  const [isMuted, setIsMuted] = useState(false); // Track mute state
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const musicUtils = new MusicUtils();
  const musicList = musicUtils.getMusicList();
  const [currentTrack, setCurrentTrack] = useState(new Audio());
  const [user, setUser] = useState(null);
  const { timeConverter } = useUIUtils();

  const { 
    trackArt, 
    nowPlaying, 
    updateTrackInfo, 
    setTrackArt
  } = useTrackInfo(musicList, trackIndex);

  const { 
    logoLeads,
    cardClass,
    dynamicMessage, 
    dynamicLeadClasses,
    toggleLogo,
    landingHover, 
    updateInfoCard, 
    setLogoLeads, 
    setDynamicLeadClasses
  } = useUIEvents(musicList, trackIndex);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users',
      { withCredentials: true })
      .then(res => {
        // setUser(res.data)
        console.log('🚀🚀🚀', res.data)
      })
      .catch(err => {
        console.log('🔭🎡🎡', err)
      });
  }, []);

  useEffect(() => {
    // Load initial track
    loadTrack(trackIndex);

    // Set interval for updating track information
    const intervalId = setInterval(() => {
      // Update track information
      setUpdate();

      // Update dynamic content for track info and logo
      toggleLogo();
      updateInfoCard();
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [trackIndex]);

  const loadTrack = () => {
    clearInterval(updateTimer);
    //convertTime(currentTrack.duration)
    reset();

    // Set the new track information
    currentTrack.src = musicList[trackIndex].music;

    // Update track info using the hook's function
    updateTrackInfo(trackIndex);
  
    currentTrack.addEventListener('loadedmetadata', () => {
      // Set total duration once track metadata is loaded
      const formattedTotalDuration = timeConverter(currentTrack.duration);
      setTotalDuration(formattedTotalDuration);
    });

    setUpdateTimer(setInterval(setUpdate, 1000));
    currentTrack.addEventListener('ended', nextTrack);
  }

  const reset = () => {
    setCurrentTime(0);
    updateInfoCard(); // Add this line
    setSeekSlider(0);
  }

  const randomTrack = () => {
    isRandom ? pauseRandom() : playRandom();
  }

  const playRandom = () => {
    setIsRandom(true);
    setRandomIcon('randomActive');
  }

  const pauseRandom = () => {
    setIsRandom(false);
    setRandomIcon('fa-random');
  }

  const repeatTrack = () => {
    setIsRepeat(!isRepeat);
    setCurrentIndex(trackIndex);
    // loadTrack(trackIndex);
    // playTrack();
  }

  const playpauseTrack = () => {
    isPlaying ? pauseTrack() : playTrack();
  }

  const playTrack = () => {
    currentTrack.play();
    setTrackArt('rotate')
    setIsPlaying(true);
    setWave('loader')
    setPlayPauseBtn('⏸');
  }

  const pauseTrack = () => {
    clearInterval(updateInterval);
    currentTrack.pause();
    setIsPlaying(false);
    setPlayPauseBtn('▶');
  }

  const stopTrack = () => {
    clearInterval(updateInterval);
    currentTrack.pause();
    currentTrack.currentTime = 0;
    setIsPlaying(false);
    setSeekSlider(0);
    setPlayPauseBtn('▶');
    reset()
  }

  const nextTrack = () => {
    if (trackIndex < musicList.length - 1 && !isRandom) {
      setTrackIndex(trackIndex + 1);
    } else if (isRandom) {
      setRandomIndex(Math.floor(Math.random() * musicList.length));
      setTrackIndex(randomIndex);
    } else if (isRepeat) {
      setTrackIndex(trackIndex);  // No need to change, just restart the current track
    } else {
      setTrackIndex(0);  // If it's the last track, go back to the first one
    }
  
    loadTrack(trackIndex);  // Load the track based on the new trackIndex
    playTrack();  // Start playing the track
  };

  const prevTrack = () => {
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : musicList.length - 1);
    loadTrack(trackIndex);
    playTrack();
  }

  // When the user interacts with the seek slider
  const seekTo = (event) => {
    if (event && event.target) {
      const value = event.target.value;
      if (value !== undefined && value !== null) {
        const newTime = (value / 100) * currentTrack.duration;
        if (!isNaN(newTime) && isFinite(newTime)) {
          currentTrack.currentTime = newTime;  // Update current time of track directly
          setSeekSlider(value);  // Update seek slider value
        }
      }
    } else {
      console.error('Event or event.target is undefined');
    }
  };
  
  const setVolume = (newVolume) => {
    currentTrack.volume = newVolume / 100;
    setVolumeSlider(newVolume); // Sync the volume slider with the actual volume
    setVolumeLevel(newVolume / 100); // Update volume point display (if needed)
  };

  const toggleMute = () => {
    if (isMuted === true) {
      // If currently muted, restore volume
      currentTrack.volume = 1;
      setVolumeSlider(100); // Set volume slider to 0
      setIsMuted(false); // Unmute
    } else {
      // If not muted, mute the audio
      currentTrack.volume = 0;
      setVolumeSlider(0); // Set volume slider to 0
      setIsMuted(true); // Set mute state to true
    }
  };

  const setUpdate = () => {
    console.log('Updating track information...');
    console.log('Current Time:', currentTrack.currentTime);
    console.log('Duration:', currentTrack.duration);
  
    if (!isNaN(currentTrack.duration)) {
      const newDuration = currentTrack.duration;
      const newCurrentTime = currentTrack.currentTime;
      const newSeekSliderValue = (newCurrentTime / newDuration) * 100;
  
      // Update seekSlider value only if it's not manually changed
      if (seekSlider !== newSeekSliderValue) {
        setSeekSlider(newSeekSliderValue);
      }
  
      const newCurrentMinutes = Math.floor(newCurrentTime / 60);
      const newCurrentSeconds = Math.floor(newCurrentTime - newCurrentMinutes * 60);
      const newDurationMinutes = Math.floor(newDuration / 60);
      const newDurationSeconds = Math.floor(newDuration - newDurationMinutes * 60);
  
      setCurrentMinutes(newCurrentMinutes);
      setCurrentSeconds(newCurrentSeconds);
      setDurationMinutes(newDurationMinutes);
      setDurationSeconds(newDurationSeconds);
  
      // Using timeConverter from useUIUtils
      const formattedCurrentTime = timeConverter(newCurrentTime);
      const formattedRemainingTime = timeConverter(newDuration - newCurrentTime);
      const formattedTotalDuration = timeConverter(currentTrack.duration);

      setTotalDuration(formattedTotalDuration);
      setCurrentTime(formattedCurrentTime);
      setRemainingDuration(formattedRemainingTime);
    }
  };

  return (
    {
      musicList,
      trackIndex,
      isPlaying,
      isRandom,
      isMuted,
      seekSlider,
      volumeSlider,
      currentTime,
      totalDuration,
      remainingDuration,
      playpauseTrack,
      stopTrack,
      nextTrack,
      prevTrack,
      repeatTrack,
      randomTrack,
      seekTo,
      setSeekSlider,
      toggleMute,
      setVolume,
      setVolumeSlider,
      landingHover
    }
  );
}

export default useAudioPlayer;













  // const setVolume = (newVolume) => {
  //   const numericVolume = Number(newVolume); // Ensure it's a number
  //   if (!isNaN(numericVolume) && isFinite(numericVolume)) {
  //     if (currentTrack) {
  //       currentTrack.volume = numericVolume / 100;
  //     }
  //     setVolumeSlider(numericVolume);
  //     setVolumeLevel(numericVolume / 100); // If used elsewhere
  //   } else {
  //     console.warn("Invalid volume value:", newVolume);
  //   }
  // };


  // const setVolume = (newVolume) => {
  //   const numericVolume = Number(newVolume); // Ensure it's a number
  //   if (!isNaN(numericVolume) && isFinite(numericVolume)) {
  //     if (currentTrack) {
  //       currentTrack.volume = numericVolume / 100; // Set the actual audio volume
  //     }
  //     setVolumeSlider(numericVolume); // Sync slider state
  //     setVolumeLevel(numericVolume / 100); // Update volume point display if needed
  //   } else {
  //     console.warn("Invalid volume value:", newVolume);
  //   }
  // };
  