import React, { useEffect } from 'react'

import {useDispatch, useSelector} from "react-redux";
import { TopRated_API_URL } from '../utils/constant';
import { AddTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch=useDispatch();
    const TopRatedMovies=useSelector(store=>store.movies.TopRatedMovies)
    const getTopRatedMoveis=async()=>{
        const data=await fetch(TopRated_API_URL);
        const json=await data.json();
        dispatch(AddTopRatedMovies(json.results));
        
    }
    useEffect(()=>{
        !TopRatedMovies&&getTopRatedMoveis();
    },[])
}
export default useTopRatedMovies;
