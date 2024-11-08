import React, { useEffect, useState, Suspense } from "react";
import useFullscreen from "hooks/useFullscreen";
import mediaData from "./Services/Media.json";
import "./App.css";

// Lazy load components
const Header = React.lazy(() => import("./components/Header"));
const VideoPlayer = React.lazy(() => import("./components/VideoPlayer"));
const ImageComponent = React.lazy(() => import("./components/Image"));

const App = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [mediaContent, setMediaContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mediaFiles = mediaData.media.filter(
      (item) => item.fileType === "video" || item.fileType === "image"
    );

    if (mediaFiles.length > 0) {
      setMediaContent(mediaFiles);
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaContent.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaContent.length - 1 : prevIndex - 1
    );
  };

  if (!mediaContent || mediaContent.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMedia = mediaContent[currentIndex];

  return (
    <div className="App">
      {/* Suspense to show a loading fallback while components are being lazy-loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Header isFullscreen={isFullscreen} />
        <div className="media-container">
          {currentMedia.fileType === "video" && (
            <VideoPlayer isFullscreen={isFullscreen} Url={currentMedia.url} />
          )}
          {currentMedia.fileType === "image" && (
            <ImageComponent
              Url={currentMedia.url}
              currentIndex={currentIndex}
              totalData={mediaData.media.length}
              toggleFullscreen={toggleFullscreen}
              isFullscreen={isFullscreen}
            />
          )}

          <div className="carousel">
            <button className="carousel-btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="carousel-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
