import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options, Top_Rated_Movie } from '../utils/constant';
import { getTopRatedMovies } from '../redux/movieSlice';

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
        try {
            const res = await axios.get(Top_Rated_Movie, options);
            dispatch(getTopRatedMovies(res.data.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);

        }
    };
    // calling the async function
    fetchTopRatedMovies();
  }, [dispatch]);
}

export default useTopRatedMovies