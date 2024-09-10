import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/movieSlice';
import { Now_Playing_Movie, options } from '../utils/constant';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    // Call the async function
    fetchNowPlayingMovies();
  }, [dispatch]);  // Dependency array
};

export default useNowPlayingMovies;
