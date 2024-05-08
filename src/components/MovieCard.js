import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant';

const MovieCard = ({movie}) => {

    return (
        <div className='w-36 pr-2'>
            <img alt={movie.title} src={POSTER_IMG_URL+movie.poster_path}/>
        </div>
    )
}
export default MovieCard;
