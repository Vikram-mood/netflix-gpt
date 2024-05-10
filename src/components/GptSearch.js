import React from 'react'
import { Form } from 'react-router-dom';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constant';

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10 '>
                <img src={BACKGROUND_IMG} alt='bg-img' className=' object-cover h-screen md:w-screen'/>
            </div>
            <div className=''>

                <GptSearchBar />
                <GptMovieSuggestions />

            </div>
        </>

    )
}
export default GptSearch;
