import React from "react";
import "./index.css";

const Index = ({
  isFullscreen,
  toggleFullscreen,
  togglePlayPause,
  playing,
  playerRef,
  resetPlayer,
  currentTime,
  duration,
  handleSeek,
  formatTime,
}) => {
  return (
    <div
      className={isFullscreen ? "player-footer-fullscreen" : "player-footer"}
    >
      <div className="player-bar">
        <div className="playing-time">{formatTime(currentTime)}</div>
        <input
          type="range"
          min="0"
          width={"100%"}
          max={duration || 1}
          value={currentTime}
          step="0.1"
          onChange={handleSeek}
          className="input-bar"
        />
        <div className="total-time">{formatTime(duration)}</div>
      </div>
      <div className="controls">
        <div className="left-controls">
          <button onClick={resetPlayer}>Reset</button>
        </div>
        <div className="middle-controls">
          <button onClick={togglePlayPause}>
            {playing ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </button>
        </div>
        <div className="right-controls">
          <button onClick={() => toggleFullscreen(playerRef.current.wrapper)}>
            {isFullscreen ? (
              <i className="fa-solid fa-compress"></i>
            ) : (
              <i className="fa-solid fa-expand"></i>
            )}
          </button>
        </div>
        <div className="time-display"></div>
      </div>
    </div>
  );
};

export default Index;
