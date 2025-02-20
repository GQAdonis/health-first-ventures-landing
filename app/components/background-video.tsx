// BackgroundVideo.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => {
        setIsLoading(false);
        video.play().catch(error => {
          console.error('Auto-play failed:', error);
          setHasError(true);
        });
      };
      const handleError = (error: Event) => {
        console.error('Video loading error:', error);
        setHasError(true);
        setIsLoading(false);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full -z-10 overflow-hidden ${className || ''}`}>
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      
      {isLoading && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/75">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/falcon_fly.mp4" type="video/mp4" />
        </video>
      )}

      {hasError && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/75">
          <div className="text-white text-center">
            <p>Unable to load video background</p>
            {process.env.NODE_ENV === 'development' && (
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-white/10 rounded hover:bg-white/20"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;
