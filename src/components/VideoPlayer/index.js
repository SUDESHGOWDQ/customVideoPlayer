import React, { useState, useRef } from "react";
import useFullscreen from "hooks/useFullscreen";
import Player from "./Player";
import "./index.css";

const Index = ({ isFullscreen, Url }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const { toggleFullscreen } = useFullscreen();

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const resetPlayer = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0, "seconds");
    }
    setCurrentTime(0);
    setPlaying(false);
  };

  const handleProgress = ({ played, playedSeconds }) => {
    setCurrentTime(playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (event) => {
    const newTime = parseFloat(event.target.value);
    if (playerRef.current && playerRef.current.seekTo) {
      playerRef.current.seekTo(newTime, "seconds");
    } else {
      console.error("Player is not ready or seekTo method is not available");
    }
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="video-player-main-container">
      <Player
        isFullscreen={isFullscreen}
        playerRef={playerRef}
        playing={playing}
        handleProgress={handleProgress}
        handleDuration={handleDuration}
        toggleFullscreen={toggleFullscreen}
        togglePlayPause={togglePlayPause}
        resetPlayer={resetPlayer}
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
        formatTime={formatTime}
        url={Url}
        onSeek={handleSeek}
      />
    </div>
  );
};

export default Index;
