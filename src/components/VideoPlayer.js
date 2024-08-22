import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { FaPlay, FaPause } from "react-icons/fa";

const VideoPlayer = ({ videoUrl, thumbnail  }) => {
  const [playing, setPlaying] = useState(false);
  const [showPauseButton, setShowPauseButton] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    setShowPauseButton(true);
    setTimeout(() => {
      setShowPauseButton(false);
    }, 2000); // Show pause button for 2 seconds
  };

  return (
    <div className="video-container">
      {!playing && (
        <div className="thumbnail-wrapper" onClick={handlePlay}>
          <img src={thumbnail} alt="Thumbnail" className="thumbnail" />
          <div className="overlay">
            <div className="video-play-button"><FaPlay /></div>
          </div>
        </div>
      )}
      <div className={`player-wrapper ${playing ? 'no-shadow' : ''}`}>
        <ReactPlayer
          url={videoUrl}
          playing={playing}
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      {showPauseButton && playing && (
        <div className="pause-overlay">
          <div className="video-pause-button"><FaPause /></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
