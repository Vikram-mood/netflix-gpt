import React, { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'
import VideoBackground from './VideoBackground';
import useMovieTrailer from '../hooks/useMovieTrailer';

import { auth } from '../utils/firebase';

import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';


const VideoPlaying = () => {

    const [searchParam]=useSearchParams();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const movieId=searchParam.get("v");
    useMovieTrailer(movieId);


    // console.log(auth);
    
   

    return (
        <div>
            <VideoBackground id={movieId}/>    
        </div>
    )
}
export default VideoPlaying;
