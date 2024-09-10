import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
    const user = useSelector((store) => store.app.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        console.log("Attempting logout...");
        try {
            const res = await axios.get(`${API_END_POINT}/logout`, {
                withCredentials: true
            });
            console.log("Logout response:", res.data);
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(setUser(null));
                navigate("/");
            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
            console.error("Error response data:", error.response?.data);
            toast.error("An error occurred during logout");
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full h-24 flex items-center justify-between px-8 pt-2 pb-1 bg-gradient-to-b from-black via-black/70 to-transparent z-50'>
            <img className='w-80 h-16' src='./images/cmp-logo.png' alt='AnimeFlix Logo' />
            {
                user && (
                    <div className='flex items-center'>
                        <div className='ml-5 flex gap-2'>
                            <button onClick={logoutHandler} className='text-base font-medium bg-yellow-500 px-4 py-2 hover:bg-yellow-600 rounded-lg'>Logout</button>
                            <button className='text-base font-medium bg-yellow-500 px-4 py-2 hover:bg-yellow-600 rounded-lg'>Search Movies</button>
                        </div>
                        <h1 className='text-xl font-bold ml-8 bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue/100 to-green-400'>{user.fullName}</h1>
                        <IoIosArrowDropdownCircle className='ml-1 text-white' size="30px" />
                    </div>
                )
            }
        </div>
    )
}

export default Header;
