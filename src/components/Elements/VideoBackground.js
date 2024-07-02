import React from 'react';
import './VideoBackground.css'; 

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/videos/star_burst.mp4" type="video/mp4" />
      </video>
      <div className="content">
      </div>
    </div>
  );
}

export default VideoBackground;