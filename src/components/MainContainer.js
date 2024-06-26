import React from 'react'
import {useSelector} from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {

    const movies=useSelector((store)=>store.movies?.NowPlayingMovies);
    // console.log(movies);
    if(!movies) return null;

    const {original_title,overview,id}=movies[0];
    return (
        <div className='pt-[35%] bg-black md:pt-0'>
           
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground id={id}/>
            

           {/* 
            1. Video background
            2. video Title

            */}
        </div>
    )
}
export default MainContainer;

