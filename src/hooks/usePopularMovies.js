import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { POPULAR_API_URL } from '../utils/constant';
import { AddPopularMovies } from '../utils/movieSlice';



const usePopularMovies = () => {

    const dispatch=useDispatch();
    const getPopularMoveis=async ()=>{
        const data=await fetch(POPULAR_API_URL);
        const json=await data.json();
        // console.log(json);
        dispatch(AddPopularMovies(json.results));

    }
    useEffect(()=>{
        getPopularMoveis();
    },[])
    
}
export default usePopularMovies;
