import React from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

function VideoTitle() {
    return (
        <div className='w-screen aspect-video absolute text-white p-10 w-[50%] mt-[16%] ml-32 z-10'>
            <h1
                className='text-6xl font-bold'
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                }}
            >
                Easy development
            </h1>
            <p
                className='my-6 w-[100%]'
                style={{
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                }}
            >
                Learn how to develop with ease. So that you can do great in your life. So you should keep learning and keep exploring, or else you will be stagnant in your life and you will never face the world more confidently, mark my words.
            </p>
            <div className='flex mt-4'>
                <button
                    className='flex items-center text-base text-black font-medium bg-yellow-500 px-4 py-2 hover:bg-yellow-600 rounded-lg'
                    style={{
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    Play <FaPlay className='ml-2 text-xl' /> 
                </button>
                <button
                    className='flex items-center text-base text-black font-medium px-4 py-2 ml-3 rounded-lg bg-gradient-to-t from-blue-800 via-blue-500 to-green-400 shadow-lg hover:opacity-80'
                    style={{
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    Watch more <FaInfoCircle className='ml-2 text-xl' />
                </button>
            </div>
        </div>
    );
}

export default VideoTitle