import React from "react";
import "./index.css";

const index = ({ isFullscreen }) => {
  return (
    <div
      className="Header"
      style={{ display: isFullscreen ? "none" : "block" }}
    >
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="nav-link">Home</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Gallery</div>
          <div className="nav-link">Conatct</div>
          <div className="nav-link">Service</div>
        </div>
      </nav>
    </div>
  );
};

export default index;
