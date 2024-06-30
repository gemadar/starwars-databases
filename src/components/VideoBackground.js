import React from 'react';
import './VideoBackground.css'; // Import CSS for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/videos/star_burst.mp4" type="video/mp4" />
        {/* Add additional <source> elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      {/* Additional content can be added over the video */}
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default VideoBackground;