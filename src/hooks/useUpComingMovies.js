import react, { useEffect } from "react"

import {useDispatch} from "react-redux";
import { AddUpcomingMovies } from "../utils/movieSlice";
import { UpComing_API_URL } from "../utils/constant";
const useUpComingMovies=()=>{

    const dispatch=useDispatch();

    const getUpComingMoveis= async ()=>{
        const data=await fetch(UpComing_API_URL);
        const json=await data.json();
        dispatch(AddUpcomingMovies(json.results));

    }
    useEffect(()=>{
        getUpComingMoveis();
    },[])
}
export default useUpComingMovies;