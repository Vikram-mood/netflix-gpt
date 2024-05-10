import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({title,movies}) => {
    
    return (
        <div className='px-6 py-2 md:px-12'>
        <h1 className='text-white text-lg md:text-2xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
            {movies?.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
                
            </div>
        </div>
            
        </div>
    )
}
export default MoviesList;
