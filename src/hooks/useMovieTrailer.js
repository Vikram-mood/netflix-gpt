import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { AddTrailer } from '../utils/movieSlice';
import { VIDEOS_API_KEY } from '../utils/constant';

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
    const TrailerVideo=useSelector(store=>store.movies.TrailerVideo)
    const getTrialer=async()=>{
        const video=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key="+VIDEOS_API_KEY);
        const json=await video.json() ;
        // console.log(json);
        const Trailer_Videos=json.results.filter((video)=>video.type="Trailer");
        const Trailer=Trailer_Videos[0];
        // console.log(Trailer);
        // console.log(Trailer.key)
        dispatch(AddTrailer(Trailer));
    }
    useEffect(()=>{
        !TrailerVideo&&getTrialer();
    },[])
    
}
export default useMovieTrailer;
