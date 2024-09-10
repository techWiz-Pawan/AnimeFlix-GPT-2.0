import React from 'react';

function VideoBackground() {
    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-0'>
            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                src="/videos/backgroundVideo.webm"  // Ensure this path is correct
                type="video/webm"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
}

export default VideoBackground;
