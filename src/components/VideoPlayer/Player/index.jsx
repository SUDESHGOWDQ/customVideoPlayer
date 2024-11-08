import ReactPlayer from "react-player";
import Footer from "../Footer";
import "./index.css";

const VideoPlayer = ({
  isFullscreen,
  playerRef,
  playing,
  handleProgress,
  handleDuration,
  toggleFullscreen,
  togglePlayPause,
  resetPlayer,
  currentTime,
  duration,
  handleSeek,
  formatTime,
  url,
}) => {
  return (
    <div
      className={`video-player ${isFullscreen ? "fullscreen" : ""}`}
      ref={playerRef}
    >
      <div className="player">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          controls={false}
          onProgress={handleProgress}
          onDuration={handleDuration}
          height={"inherit"}
          width={"inherit"}
        />
      </div>
      <Footer
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        togglePlayPause={togglePlayPause}
        playing={playing}
        playerRef={playerRef}
        resetPlayer={resetPlayer}
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
        formatTime={formatTime}
      />
    </div>
  );
};

export default VideoPlayer;
