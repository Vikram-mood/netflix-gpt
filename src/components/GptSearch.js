import React from 'react'
import { Form } from 'react-router-dom';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constant';

const GptSearch = () => {
    return (
        <div >
        <div className='absolute -z-10'>
                <img src={BACKGROUND_IMG} alt='bg-img' />
        </div>
            <GptSearchBar />
            <GptMovieSuggestions />
            
        </div>
    )
}
export default GptSearch;
