import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieCard = ({movie}) => {
    
   
   

        
    
    

    
    return (
        <div className='w-24 md:w-36 pr-2'>
        <Link to={"/watch?v="+movie.id}>
        <img alt={movie.title} src={POSTER_IMG_URL+movie.poster_path}/>
        </Link>
       
            
        </div>
    )
}
export default MovieCard;
