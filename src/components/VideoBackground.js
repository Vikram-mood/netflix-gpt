import React from 'react';
import {useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({id}) => {

    
    const TrailerVideo=useSelector((store)=>store.movies?.TrailerVideo);
    // console.log(TrailerVideo);

    useMovieTrailer(id);

   
   
    if(!TrailerVideo) return null;
    return (
        <div >
            <iframe 
            className='w-screen aspect-video '
            src={"https://www.youtube.com/embed/"+TrailerVideo.key+"?autoplay=1&mute=1"} 
            title="YouTube video player" 
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
        </div>
    )
}
export default VideoBackground
