import { Nowplaying_API_URL } from "../utils/constant";
import {useDispatch} from "react-redux"
import { AddNowPlayigMovies } from "../utils/movieSlice";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async ()=>{
    const data=await fetch(Nowplaying_API_URL);
    const json=await data.json();
    // console.log(json);
    dispatch(AddNowPlayigMovies(json.results));

}
useEffect(()=>{
    getNowPlayingMovies();
},[])

}

export default useNowPlayingMovies;