import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant';

const MovieCard = ({movie}) => {
    if(!movie.poster_path) return null;
    return (
        <div className='w-24 md:w-36 pr-2'>
            <img alt={movie.title} src={POSTER_IMG_URL+movie.poster_path}/>
        </div>
    )
}
export default MovieCard;
