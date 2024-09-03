import React, { useState } from 'react';
// import { checkValidData } from '../utils/validate';
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logInHandler = () => {
        setIsLogin(!isLogin)
    }

    const getInputData = async (e) => {
        e.preventDefault();

        if (isLogin) {
            // login
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true // Ensure credentials are included
                });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                navigate("/browse");
            } catch (error) {
                toast.error(error.response?.data?.message || 'Login failed');
                console.log(error);
            }
        } else {
            // register
            const user = { fullName, email, phone, password };
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true // Ensure credentials are included
                });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                setIsLogin(true);
            } catch (error) {
                toast.error(error.response?.data?.message || 'Registration failed');
                console.log(error);
            }
        }

        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }


    return (
        <div className='relative w-screen h-screen'>
            <Header />
            <div className='absolute inset-0'>
                <img className='w-full h-full object-cover' src='./images/background.png' alt='Background anime wallpaper' />
            </div>
            <div>
                <form onSubmit={getInputData} className='absolute inset-0 flex items-center justify-center p-12 bg-black bg-opacity-50 text-white'>
                    <div className='bg-opacity-70 p-10 w-4/12 rounded-lg shadow-lg bg-gradient-to-b from-green-400 via-blue-500 to-blue-600 via-black/70'>
                        <h1 className='font-bold text-3xl mb-4 text-center'> {isLogin ? 'Sign In' : 'Sign Up'} </h1>
                        {
                            !isLogin && (
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    type='text'
                                    placeholder='Full Name'
                                    className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 outline-none rounded'
                                />
                            )
                        }
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                            placeholder='Email Address'
                            className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 outline-none rounded'
                        />

                        {
                            !isLogin && (
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type='text'
                                    placeholder='Phone No.'
                                    className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 outline-none rounded'
                                />
                            )
                        }

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Password'
                            className='block w-full mb-12 p-2 border border-gray-800 bg-gray-600 outline-none rounded'
                        />

                        {
                            !isLogin ? (
                                <button
                                    type='submit'
                                    className='w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600'
                                >Sign Up</button>
                            ) : (
                                <button
                                    type='submit'
                                    className='w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600'
                                >
                                    Sign In
                                </button>
                            )
                        }

                        <p className='text-center text-white mt-8 cursor-pointer'>
                            {isLogin
                                ? <>
                                    New to Netflix? <a href='#' className='text-green-300 hover:text-green-500' onClick={logInHandler}>SIGN UP.</a>
                                </>
                                : <>
                                    Already a member? <a href='#' className='text-green-300 hover:text-green-500' onClick={logInHandler}>SIGN IN.</a>
                                </>
                            }
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;

