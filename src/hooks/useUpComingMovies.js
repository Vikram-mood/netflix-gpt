import react, { useEffect } from "react"

import {useDispatch, useSelector} from "react-redux";
import { AddUpcomingMovies } from "../utils/movieSlice";
import { UpComing_API_URL } from "../utils/constant";
const useUpComingMovies=()=>{

    const dispatch=useDispatch();
    const UpComingMovies=useSelector(store=>store.movies.UpComingMovies);
    const getUpComingMoveis= async ()=>{
        const data=await fetch(UpComing_API_URL);
        const json=await data.json();
        dispatch(AddUpcomingMovies(json.results));

    }
    useEffect(()=>{
        !UpComingMovies&&getUpComingMoveis();
    },[])
}
export default useUpComingMovies;