import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = () => {
    return (
        <div className='absolute flex w-[100%] item-center justify-between px-8 pt-2 pb-1 bg-gradient-to-b from-black via-black/70 to-transparent h-24 z-10'>
            <img className='w-80 h-16' src='./images/cmp-logo.png' alt='AnimeFlix Logo' />
            <div className='flex items-center '>
                <div className='ml-5'>
                    <button className='text-base font-medium bg-yellow-500 px-4 py-2 hover:bg-yellow-600'>Logout</button>
                    <button className='text-base font-medium bg-yellow-500 px-4 py-2 ml-2 hover:bg-yellow-600'>Search Movies</button>
                </div>
                <IoIosArrowDropdownCircle className='ml-5 text-white' size="30px" />
                <h1 className='text-xl font-bold ml-1 bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue/100 to-green-400'>EasyWays</h1>
            </div>
        </div>
    )
}

export default Header