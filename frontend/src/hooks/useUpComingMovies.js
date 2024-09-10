import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options, UpComing_Movie } from '../utils/constant';
import { getUpComingMovies } from '../redux/movieSlice';

const useUpComingMovies = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpComingMovies = async () => {
        try {
            const res = await axios.get(UpComing_Movie, options);
            dispatch(getUpComingMovies(res.data.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);

        }
    };
    // calling the async function
    fetchUpComingMovies();
  }, [dispatch]);
}

export default useUpComingMovies;