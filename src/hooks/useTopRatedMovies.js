import React, { useEffect } from 'react'

import {useDispatch} from "react-redux";
import { TopRated_API_URL } from '../utils/constant';
import { AddTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch=useDispatch();
    const getTopRatedMoveis=async()=>{
        const data=await fetch(TopRated_API_URL);
        const json=await data.json();
        dispatch(AddTopRatedMovies(json.results));
        
    }
    useEffect(()=>{
        getTopRatedMoveis();
    },[])
}
export default useTopRatedMovies;
