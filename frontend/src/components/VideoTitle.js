import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

function VideoTitle() {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start z-10'>
            <div className='ml-24 w-[50%] p-10'>
                <h1
                    className='text-6xl font-bold text-white'
                    style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                    }}
                >
                    Easy development
                </h1>
                <p
                    className='my-6 text-white w-[100%]'
                    style={{
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Learn how to develop with ease. So that you can do great in your life. Keep learning and keep exploring, or you will never face the world confidently. Mark my words.
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
        </div>
    );
}

export default VideoTitle;
