import React from 'react'

function VideoBackground() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen overflow-hidden'>
            <iframe
                className='absolute top-0 left-0 w-full h-full'
                src="https://www.youtube.com/embed/Zv11L-ZfrSg?autoplay=1&controls=0&loop=1&playlist=p4A4rklgKtw&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground
