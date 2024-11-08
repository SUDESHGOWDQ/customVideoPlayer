import React from "react";
import ImageViewer from "./ImageViewer";
import "./index.css";

const ImageComponent = ({
  Url,
  currentIndex,
  totalData,
  isFullscreen,
  toggleFullscreen,
}) => {
  return (
    <div className="image-container">
      <ImageViewer
        Url={Url}
        currentIndex={currentIndex}
        totalData={totalData}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  );
};

export default ImageComponent;
