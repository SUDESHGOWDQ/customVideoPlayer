import React, { Suspense } from "react";

const Home = ({
  isFullscreen,
  currentMedia,
  currentIndex,
  mediaData,
  toggleFullscreen,
  handlePrevious,
  handleNext,
}) => {
  const Header = React.lazy(() => import("../components/Header"));
  const VideoPlayer = React.lazy(() => import("../components/VideoPlayer"));
  const ImageComponent = React.lazy(() => import("../components/Image"));

  return (
    <div>
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

export default Home;
