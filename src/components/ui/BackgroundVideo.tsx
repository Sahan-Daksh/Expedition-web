// BackgroundVideo.tsx
import React from 'react';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      zIndex: -1 
    }}>
      <source src="/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;