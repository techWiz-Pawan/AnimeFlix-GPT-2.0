import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options, Popular_Movie } from '../utils/constant';
import { getPopularMovies } from '../redux/movieSlice';

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
        try {
            const res = await axios.get(Popular_Movie, options);
            dispatch(getPopularMovies(res.data.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);

        }
    };
    // calling the async function
    fetchPopularMovies();
  }, [dispatch]);
}

export default usePopularMovies;