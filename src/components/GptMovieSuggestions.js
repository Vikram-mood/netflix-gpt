import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptMovieSuggestions = () => {

    const {movieResults,movieNames}=useSelector(store=>store.gpt);
    if(!movieNames) return null;
    return (
        <div className='p-4 m-4 bg-black text-white  opacity-80'>
        <div>
            {movieNames.map((movieName,index)=>
            (<MoviesList 
                key={movieName} 
                title={movieName} 
                movies={movieResults[index]} 

                />
            )
        )}
            
        </div>
        </div>
    )
}
export default GptMovieSuggestions
