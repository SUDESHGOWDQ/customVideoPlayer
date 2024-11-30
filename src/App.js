import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import useFullscreen from "hooks/useFullscreen";
import mediaData from "./Services/Media.json";
import "./App.css";

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
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                isFullscreen={isFullscreen}
                currentMedia={currentMedia}
                currentIndex={currentIndex}
                mediaData={mediaData}
                toggleFullscreen={toggleFullscreen}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
