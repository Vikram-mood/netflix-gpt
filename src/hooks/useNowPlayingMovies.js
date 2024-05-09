import { Nowplaying_API_URL } from "../utils/constant";
import {useDispatch, useSelector} from "react-redux"
import { AddNowPlayigMovies } from "../utils/movieSlice";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);


    const getNowPlayingMovies=async ()=>{
    const data=await fetch(Nowplaying_API_URL);
    const json=await data.json();
    // console.log(json);
    dispatch(AddNowPlayigMovies(json.results));

}
useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
},[])

}

export default useNowPlayingMovies;