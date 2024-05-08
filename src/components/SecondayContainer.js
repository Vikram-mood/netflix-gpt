import React from 'react'
import MoviesList from './MoviesList';
import {useSelector} from "react-redux";

 const SecondayContainer = () => {
    const movies=useSelector((store)=>store.movies);


    return (
        <div className='bg-black'>
        <div  className='-mt-44  relative z-20'>
            <MoviesList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
            <MoviesList title={"Trending"} movies={movies.PopularMovies}/>
            <MoviesList title={"Top Rated"} movies={movies.TopRatedMovies}/>
            <MoviesList title={"UpComing"} movies={movies.NowPlayingMovies}/>
        </div>

            {/* 
                 Movies List - Nowplaying
                    -Movie Card * n
                 Movies List - Trending
                 Movies List - top rated


            
             */}
        </div>
    )
}
export default SecondayContainer;
