import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { POPULAR_API_URL } from '../utils/constant';
import { AddPopularMovies } from '../utils/movieSlice';



const usePopularMovies = () => {

    const dispatch=useDispatch();
    const PopularMovies=useSelector(store=>store.movies.PopularMovies);
    const getPopularMoveis=async ()=>{
        const data=await fetch(POPULAR_API_URL);
        const json=await data.json();
        // console.log(json);
        dispatch(AddPopularMovies(json.results));

    }
    useEffect(()=>{
        !PopularMovies&&getPopularMoveis();
    },[])
    
}
export default usePopularMovies;
